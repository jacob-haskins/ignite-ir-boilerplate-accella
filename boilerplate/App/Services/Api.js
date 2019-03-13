// a library to wrap and simplify api calls
import apisauce from "apisauce"

// our "constructor"
const create = (baseURL = "https://api.github.com/") => {
	// ------
	// STEP 1
	// ------
	//
	// Create and configure an apisauce-based api object.
	//
	const api = apisauce.create({
		// base URL is read from the "constructor"
		baseURL,
		// here are some default headers
		headers: {
			"Cache-Control": "no-cache"
		},
		// 10 second timeout...
		timeout: 10000
	})
	api.addMonitor(response => console.log("========== API Response ==========", response))

	// ------
	// STEP 2
	// ------
	//
	// Define some functions that call the api.
	//
	const getRoot = () => api.get("")
	const getRate = () => api.get("rate_limit")
	const getUser = username => api.get("search/users", { q: username })

	// ------
	// STEP 3
	// ------
	//
	// Return back a collection of functions that we would consider our
	// interface.
	//
	return {
		// a list of the API functions from step 2
		getRoot,
		getRate,
		getUser
	}
}

// let's return back our create method as the default.
export default {
	create
}
