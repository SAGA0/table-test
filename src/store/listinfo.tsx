import { makeAutoObservable } from 'mobx';
import axios from 'axios';

export interface User {
    id: string | number
    body: string
    title: string
}

export class UserModel {
    allData: User[] = []
    data: User[] = []
    offset = 10
    page = 1
    error = null

    constructor () {
        makeAutoObservable(this)
    }

    fetchData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.data = JSON.parse(JSON.stringify(response.data.slice(this.offset - 10, this.offset)))
                this.allData = response.data
                console.log('Success');
            })
            .catch(err => {
                this.error = err
                console.log('Error');
            })

    };

    nextStep() {
        if (this.page !== 10) {
            this.page++
            this.offset += 10
            this.data = this.allData.slice(this.offset - 10, this.offset)
        } else {
            console.log('fail')
            return
        }


    }

    prevStep() {
        if (this.page !== 1) {
            this.page -= 1
            this.offset -= 10
            this.data = this.allData.slice(this.offset - 10, this.offset)
        } else {
            console.log('fail')
            return
        }


    }

}
