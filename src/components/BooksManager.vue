<script setup>
import { GetBooks } from '../api/books';
</script>

<script>
export default{
    name:"BooksManager",
    data(){
        return{
            books:[],
    };
    },
    mounted(){
        this.loadBooks()
            
    },
    methods:{
        async loadBooks(){
            this.books=await GetBooks();
        }
    }
}
</script>

<template>
    <main class="">
        <h1 class="">Könyv kezelő rendszer</h1>

        <table>
            <thead>
                <tr>
                    <th class="">Azonosito:</th>
                    <th class="">Cim:</th>
                    <th class="">Szerző:</th>
                    <th class="">Ev:</th>
                    <th class="">Művelet</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id" class="">
                    <td class="">{{ book.id }}</td>
                    <td class="">{{ book.title }}</td>
                    <td class="">{{ book.author }}</td>
                    <td class="">{{ book.year }}</td>
                    <td class="">-</td>
                </tr>
            </tbody>
        </table>


    </main>
</template>