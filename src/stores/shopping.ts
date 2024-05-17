import { defineStore } from 'pinia'
import { IShopping } from '@/interfaces/IShopping'
import { Headers } from '@/interfaces/IProject'
import FetchService from '@/services/FetchService'
export const useSalesStore = defineStore('shopping', {
    state: () => ({
        headers: [
            {name: 'Código', dbName: 'Fac_codigo'},
            {name: 'Fecha', dbName: 'Fac_fechaGeneracion'},
            {name: 'Subtotal', dbName: 'Fac_subtotal'},
            {name: 'Total', dbName: 'Fac_precioTotal'},
            {name: 'IVA', dbName: 'Fac_IVA'},
            {name: 'Proveedor', dbName: 'Cl_codigo'},// Cambiar segun la base de datos
        ] as Headers[] ,
        dataList : [] as IShopping[],
        singleData : {} as IShopping,
        cachedData : [] as IShopping[],
        fetchedBefore : false
    }),
    actions: {
        async fetchDataList() {
            const fetchService = new FetchService<IShopping>('shopping')
            if (await fetchService.fetchData()) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener la lista de ventas")
                return false
            }
        },
        async fetchSingleData(id: number) {
            const fetchService = new FetchService<IShopping>('shopping')
            if (await fetchService.fetchSingleData(id)) {
                this.singleData = fetchService.getSingleData()
                return true
            }
            else {
                console.log("Error, no se pudo obtener la venta")
                return false
            }
        },
        async deleteData(data: IShopping) {
            const fetchService = new FetchService<IShopping>('shopping')
            if (await fetchService.deleteData(data)) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo borrar la venta")
                return false
            }
        },

        async updateData(current: IShopping, data: IShopping) {
            const fetchService = new FetchService<IShopping>('shopping')
            if (await fetchService.updateData(current, data)) {
                this.dataList = fetchService.getData()
                return true
            }
            else {
                console.log("Error, no se pudo actualizar la venta")
                return false
            }
        },
        
        devFillerData() {
            this.dataList = [
                {
                    Fac_codigo: 101,
                    Fac_fechaGeneracion: new Date('2024-05-04T09:00:00'),
                    Fac_subtotal: 80000,
                    Fac_precioTotal: 95200,
                    Fac_IVA: 15200,
                    Cl_codigo: 501
                },
                {
                    Fac_codigo: 102,
                    Fac_fechaGeneracion: new Date('2024-05-04T10:30:00'),
                    Fac_subtotal: 120000,
                    Fac_precioTotal: 142800,
                    Fac_IVA: 22800,
                    Cl_codigo: 502
                },
                {
                    Fac_codigo: 103,
                    Fac_fechaGeneracion: new Date('2024-05-04T11:45:00'),
                    Fac_subtotal: 45000,
                    Fac_precioTotal: 53550,
                    Fac_IVA: 8550,
                    Cl_codigo: 503
                }
            ]
        }
    }
})