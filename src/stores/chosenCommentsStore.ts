import {defineStore} from 'pinia';
import { v4 } from 'uuid';
import {COMMENTS} from '@/fakeDB/comments';
import type {Comment} from '../models/comment.model'



export const useChosenCommentStore = defineStore({
    id:'chosenComment',
    state: ()=>({
        localComments:null as Comment[]|null,
    }),

    actions:{

         async loadComments(idTask:string){
            
            this.localComments = COMMENTS.filter((c)=>c.idTask===idTask)|| null;
           
       
        },
        async sendComment({idTask,commentText}:{idTask:string;commentText:string}){
            if (commentText.trim()!==""){
                const newComment:Comment={
                    id:v4(),
                    idTask,
                    idUser:"unknown",
                    commentText
                }
                COMMENTS.push(newComment);
               // await this.loadComments(idTask)
            }

        }
    }
})