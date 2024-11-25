import { AppURL, BackendURL } from "../default.endpoints"

// USING BACKEND API
export const SearchCategoryByNameAPI = `${BackendURL}/categories/search/by-name`

export const SetStreamInfoAPI = `${BackendURL}/livestreams/set-info`
export const SetStreamStatusAPI = `${BackendURL}/livestreams/set-live`
export const GetStreamInfoAPI = `${BackendURL}/livestreams/livestream-info`

// USING NEXT API
export const NextSearchCategoryByNameAPI = `${AppURL}/api/livestream/search-category-by-name`
export const NextSetStreamInfoAPI = `${AppURL}/api/livestream/set-stream-info`
