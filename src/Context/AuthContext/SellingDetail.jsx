import React from "react"

export const CategoryDataContext =React.createContext()

const CategoryDataContextProvider = ({children}) => {
  const [categoryObj,setCategoryObj]=React.useState({})

  const sendCategory=(category, subcategory)=>{
    setCategoryObj({category:category, subcategory:subcategory})
  }
  return (
  <CategoryDataContext.Provider value={{categoryObj,sendCategory}}>
    {children}
  </CategoryDataContext.Provider>
  )
};

export default CategoryDataContextProvider;