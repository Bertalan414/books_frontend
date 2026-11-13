<script setup>
import { createBook, deleteBook, GetBooks } from '../api/books';
</script>

<script>
export default{
    name:"BooksManager",
    data(){
        return{
            books:[],
            newBook:{
                title:"",
                author:"",
                year:2000,
            }
        };
    },
    mounted(){
        this.loadBooks()

    },
    methods:{
        async loadBooks(){
            this.books=await GetBooks();
        },
        async addBook(book){
            await createBook(book);
            await this.loadBooks();
        },
        async submitCreateBook(){
            await this.addBook(this.newBook);
        },
        async removeBook(id){
            await deleteBook(id);
            await this.loadBooks();
        }
    }
}
</script>

<template>
    <main class="">
        <h1 class="">Könyv kezelő rendszer</h1>

        <form @submit.prevent="submitCreateBook()" class="border-2 border-stone-200 p-2 m-2 flex flex-col gap-4">
            <div class="flex flex-col">
                <label for="title" class="">title:</label>
                <input v-model="newBook.title" type="text" class="border-2 border-stone-200 p-1" name="title">
            </div>
            <div class="flex flex-col">
                <label for="author" class="">author:</label>
                <input v-model="newBook.author" type="text" class="border-2 border-stone-200 p-1" name="author">
            </div>
            <div class="flex flex-col">
                <label for="year" class="">Year:</label>
                <input v-model="newBook.year" type="text" class="border-2 border-stone-200 p-1" name="year">
            </div>

            <button class="border-2 border-stone-200 p-2" type="submit">Létrehozás</button>
        </form>

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
                    <td class="">
                        <button @click="removeBook(book.id)" class="m-2 border-2 border-rose-500 text-rose-500 p-2 cursor-pointer" type="button">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>


    </main>
</template>