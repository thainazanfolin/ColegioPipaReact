import { useEffect, useState, useReducer } from "react";
import {db} from "../firebase/config"
import {collection, addDoc, TimeStamp} from "firebase/firestore"

const initialState = {
    loading: null,
    erro: null
}

const insertReducer = (state, action) => {
    switch(action.type){

    }


}

export const useInsertDocument = (docCollection) =>{

    const [response, dispatch] = useReducer(insertReducer, initialState)

    const insertDocument = async(document) => {

        try {
            const newDocument = {...document, createdAt: TimeStamp.now()}

            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            )
                
            checkCancelBeforeDispatch({
                type:"",
                payload: insertDocument
            })

        } catch (error) {
            
        }
    }

    return {insertDocument, response}
}