const API_URL="/api/books";

const GetBooks= async()=>{
    const response=await fetch(API_URL);

    return response.json();
};

export{GetBooks,};