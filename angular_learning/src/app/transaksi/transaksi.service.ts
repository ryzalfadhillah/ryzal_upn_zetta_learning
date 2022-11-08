import { BehaviorSubject } from "rxjs"
import { Injectable } from "@angular/core";
export interface item {id: number, name: string, price: number, category: string};
export interface Selecteditem {id: number, name: string, price: number, category: string, amount: number};

@Injectable({
    providedIn: 'root'
})

export class TransaksiService {
    private items: BehaviorSubject<item[]> = new BehaviorSubject<item[]> ([
        {id: 1, name: 'Steak Ayam', price: 25000, category: 'Makanan'},
        {id: 2, name: 'Steak Sirloin', price: 45000, category: 'Makanan'},
        {id: 3, name: 'Steak Kambing', price: 45000, category: 'Makanan'},
        {id: 4, name: 'Nasi Gurih', price: 15000, category: 'Makanan'},
        {id: 5, name: 'Nasi Goreng', price: 25000, category: 'Makanan'},
        {id: 6, name: 'Mie Ayam', price: 15000, category: 'Makanan'},
        {id: 7, name: 'Nasi Soto', price: 25000, category: 'Makanan'},
        {id: 8, name: 'Dimsum Ayam', price: 15000, category: 'Cemilan'},
        {id: 9, name: 'Dimsum Sapi', price: 20000, category: 'Cemilan'},
        {id: 10, name: 'Dimsum Jamur', price: 15000, category: 'Cemilan'},
        {id: 11, name: 'Keripik Ubi', price: 5000, category: 'Cemilan'},
        {id: 12, name: 'Jus Apel Fiji', price: 15000, category: 'Minuman'},
        {id: 13, name: 'Jus Jeruk Bali', price: 15000, category: 'Minuman'},
        {id: 14, name: 'Jus Alpukat', price: 15000, category: 'Minuman'},
        {id: 15, name: 'Jus Anggur', price: 20000, category: 'Minuman'},
        {id: 16, name: 'Cappucino', price: 15000, category:'Minuman'},
        {id: 17, name: 'Air Mineral', price: 5000, category:'Minuman'},
        {id: 18, name: 'Kopi Tubruk', price: 5000, category:'Minuman'},
        {id: 19, name: 'Nasi Putih', price: 5000, category:'Tambahan'},
        {id: 20, name: 'Kerupuk Udang', price: 5000, category:'Tambahan'},
        {id: 21, name: 'Baso Ayam', price: 5000, category:'Tambahan'},
        {id: 22, name: 'Jamur', price: 5000, category:'Tambahan'}
    ])

    private selectedItems: BehaviorSubject<Selecteditem[]> = new BehaviorSubject<Selecteditem[]>([]);

    public items$ = this.items.asObservable();
    public selectedItems$ = this.selectedItems.asObservable();

    addItem(item:item){
        const duplicate = this.selectedItems.value.findIndex(({id}) => id === item.id);
        if(duplicate >= 0){
            this.selectedItems.value[duplicate].amount +=1
        }else{
            this.selectedItems.value.push({...item, amount: 1})
        }        
    } 

    removeItem(itemToBeRemoved:Selecteditem){
        const itemIndex = this.items.value.findIndex(({id}) => id === itemToBeRemoved.id)
        
        if(this.selectedItems.value[itemIndex].amount > 1){
            this.selectedItems.value[itemIndex].amount -= 1
        }
        else{
            this.selectedItems.value.splice(itemIndex,1);
        }
    }
}