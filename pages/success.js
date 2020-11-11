import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { useRouter } from 'next/router'
import { API_URL } from '../utils/urls'

import Link from 'next/link'

const useOrder = (session_id) => {
    const [order, setOrder] = useState(null)
    const [loading, setLoading] = useState(null)

    const { getToken, user } = useContext(AuthContext);

    useEffect(() => {
        if(user){
            const fetchOrder = async () => {
                setLoading(true)
                try{
                    const token = await getToken()
                    const res = await fetch(`${API_URL}/orders/confirm`, {
                            method: 'POST',
                            body: JSON.stringify({ checkout_session: session_id }),
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            }
                    })
    
                    const data = await res.json()
                    setOrder(data)
                } catch (err){
                    setOrder(null)
                }
                setLoading(false)
            }
            fetchOrder()
        }

    }, [user])

    return { order, loading }
}

export default function Success(){

    const router = useRouter()
    const { session_id } = router.query
    const { order, loading } = useOrder(session_id)

    return (
        <div>
            <h2>Hold on!</h2>
            { loading && <p>We're confirming your purchase!</p>}
            { !loading && order && (
                <p>Your order was processed successfully! <Link href="/account">View Orders</Link></p>
            )}
        </div>
    )
}