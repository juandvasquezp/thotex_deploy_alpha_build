<template>
    <div>
        <h1>Historial de inventario</h1>
        <TableComponent @editCurrentRow="editItem" @deleteCurrentRow="deleteItem" v-if="showTable" :headers="inventoryStore.headers" :data="inventoryStore.dataList"/>
    </div>
</template>

<script setup lang="ts">
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import { useInventoryStore } from '@/stores/inventory';
    import { onMounted, ref, Ref } from 'vue';
    import { IProduct } from '@/interfaces/IInventory';
    import { useRouter } from 'vue-router';
    import swal from 'sweetalert';

    const router = useRouter();

    const inventoryStore = useInventoryStore();
    let showTable: Ref<boolean> = ref(false);

    onMounted(() => {
        if (inventoryStore.dataList.length > 0) {
            showTable.value = true
        }
    })

    const editItem = async( item: IProduct ) => {
        console.log(item)
        if ( await inventoryStore.fetchSingleData(item.Emp_codigo)) {
            router.push({name: 'editInventory', params: {id: inventoryStore.singleData.Emp_codigo}})
            // Actualizar la tabla
            inventoryStore.fetchDataList()
        } else {
            console.log("Error, no se pudo obtener el item")
        }
    }

    const deleteItem = async ( item: IProduct ) => {
        console.log(item)
        if (await inventoryStore.deleteData(item)) {
            // Actualizar la tabla
            console.log("Item eliminado")
            swal("¡Genial!", "Se ha eliminado exitosamente", "success")
            inventoryStore.fetchDataList()
        } else {
            console.log("Error, no se pudo borrar el item")
            swal("Error", "No se pudo borrar el item", "error")
        }
    }
</script>

<style scoped>

</style>