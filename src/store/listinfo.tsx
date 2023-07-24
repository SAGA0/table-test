import { makeAutoObservable } from 'mobx';
import axios from 'axios';

export interface User {
    id?: string | number
    body?: string
    title?: string
    field?: string
}


export class UserModel {
    allData: User[] = []
    data: User[] = []
    filterText: string = ''
    offset: number = 10
    page: number = 1
    error: boolean = false

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
                console.log(this.error);
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

    filterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.filterText = event.target.value;
    };

    sortData = (field: string) => {
        // @ts-ignore
        this.data = this.data.sort((a, b) => { return a[field] > b[field] ? 1 : -1 })
    }



}
