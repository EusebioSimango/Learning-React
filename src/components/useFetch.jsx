import { useState, useEffect } from 'react'

const useFetch = url => {

	const [error, setError] = useState(null)
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
  	const abortCont = new AbortController()

	  setTimeout( () => {
	    fetch(url, { signal: abortCont.signal })
	      .then( response => {
	        if (!response.ok){
	          throw Error('could not fetch the data for that resource')
	        }
	        return response.json()
	      })
	      .then( data => {
	        setData(data)
	        setError(null)
	        setIsPending(false)
	      })
	      .catch(err => {
	      	if (err.name === 'AbortError') {
	      		console.log('fetch aborted!')
	      	} else {
		        setIsPending(false)
		        setError(err.message)
		        console.log(err.message)
	      	}
	      })
	    }, 1000)

	  return () => abortCont.abort()
	}, [url])

	return { data, isPending, error }
}

export default useFetch