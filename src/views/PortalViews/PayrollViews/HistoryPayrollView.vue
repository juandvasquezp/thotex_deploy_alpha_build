<template>
    <div>
        <h1>Lista de empleados</h1>
        <TableComponent v-if="showTable" :headers="payrollStore.headers" :data="payrollStore.dataList" @deleteCurrentRow="deleteItem" @editCurrentRow="editItem"/>
    </div>
</template>

<script setup lang="ts">
    import TableComponent from '@/components/PortalComponents/TableComponent.vue';
    import { usePayrollStore } from '@/stores/payroll';
    import { onMounted, ref, Ref } from 'vue';
    import { IEmployeeClean } from '@/interfaces/IPayroll';
    import { useRouter } from 'vue-router';
import swal from 'sweetalert';

    const router = useRouter();

    const payrollStore = usePayrollStore();
    let showTable: Ref<boolean> = ref(false);

    onMounted(() => {
        if (payrollStore.dataList.length > 0) {
            showTable.value = true
        }
    })

    const editItem = async( item: IEmployeeClean ) => {
        console.log(item)
        if ( await payrollStore.fetchSingleData(item.Emp_codigo)) {
            router.push({name: 'editPayroll', params: {id: payrollStore.singleData.Emp_codigo}})
            // Actualizar la tabla
            payrollStore.fetchDataList()
        } else {
            console.log("Error, no se pudo obtener el item")
        }
    }

    const deleteItem = async ( item: IEmployeeClean ) => {
        console.log(item)
        if (await payrollStore.deleteData(item)) {
            // Actualizar la tabla
            console.log("Item eliminado")
            swal("¡Genial!", "Se ha eliminado exitosamente", "success")
            payrollStore.fetchDataList()
        } else {
            console.log("Error, no se pudo borrar el item")
            swal("Error", "No se pudo borrar el item", "error")
        }
    }
</script>

<style scoped>

</style>