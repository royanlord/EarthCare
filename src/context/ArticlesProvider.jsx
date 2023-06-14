import { createContext, useState } from "react"

export const ArticlesContext = createContext()

const ArticlesProvider = ({children}) => {
    const [articles, setArticles] = useState([])

    return (
        <ArticlesContext.Provider value={{articles, setArticles}}>
            {children}
        </ArticlesContext.Provider>
    )
}

export default ArticlesProvider