import React from 'react'
import { useState, useEffect } from 'react'
import {db} from "../firebase/config"
import {collection, query, orderBy, onSnapshot, where} from 'firebase/firestore'

export const useFetchDocuments = (docCollection) => {

    const [documents, setDocuments] = useState(null)

    useEffect(()=>{
        async function loadData(){
            if(cancelled) return
            setLoading(true)

            const collectionRef = await collection(db, docCollection)

            try {
                let q

                q = await query (collectionRef, orderBy("createdAt", "desc"));

                await onSnapshot(q, (querySnapshot) =>{
                    setDocuments(
                        querySnapshot.docs.map(doc) => ({
                            id:doc.id,
                            ..doc.data(),
                        })
                    )
                });


            } catch (error) {
                
            }
        }

    }, [docCollection, search, uid, cancelled]);

  
}
