<template>
    <div class="table-container">
        <table v-if="props.data && props.headers" class="table-bordered">
            <thead class="table-header">
                <tr>
                    <th scope="col" v-for="(header, index) in props.headers" :key="index">{{header.name}}</th>
                    <th v-if="!noActions" scope="col" class="w-25">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-row" v-for="(row, index) in props.data" :key="index" @click="selectRow(row)" @dbclick="selectRowDoubleClick(row)">
                    <td :class="{ 'pointer': props.noActions }" v-for="(header, index) in props.headers" :key="index">{{row[header.dbName]}}</td>
                    <td v-if="!noActions" class="actions">
                        <div class="btn-container">
                            <button class="btn btn-primary" @click="editRow(row)"><IconifyIcon icon="mdi:pencil" width="20px"/></button>
                            <button class="btn btn-danger" @click="deleteRow(row)"><IconifyIcon icon="mdi:delete" width="20px" /></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
    import { Headers } from '@/interfaces/IProject';
    import { defineProps, defineEmits } from 'vue';

    // TODO: Encontrar solucion más adecuada
    // Solucion fea pero funcional
    interface T {
        [key: string]: string | number | boolean | Date
    }
    
    const props = defineProps({
        headers: {
            type: Array as () => Headers[]
        },
        data: {
            //TODO change any
            type: Array as () => T[],
        },
        noActions: {
            type: Boolean
        }
    })

    const emit = defineEmits(['returnSelectedRow', 'returnSelectedRowDoubleClick', 'deleteCurrentRow', 'editCurrentRow']);

    const selectRow = (row: T) => {
        console.log("Seleccionado: ", row)
        emit('returnSelectedRow', row);
    }

    const selectRowDoubleClick = (row: T) => {
        console.log("Doble click: ", row)
        emit('returnSelectedRowDoubleClick', row);
    }

    const deleteRow = (row: T) => {
        emit('deleteCurrentRow', row);
    }

    const editRow = (row: T) => {
        emit('editCurrentRow', row);
    }
</script>

<style scoped lang="scss">
.btn {
    margin: 5px;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
}

.btn-danger {
    background-color: $custom-red;
    color: white;
}

.btn-primary {
    background-color: $custom-blue;
    color: white;
}

.table-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    border-radius: 5px; 
}

.table-bordered {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    th,
    td {
        padding: 12px 15px;
        text-align: center; 
        //Nowrap
        white-space: nowrap;
    }

    thead th {
        background-color: $custom-blue;
        color: #ffffff;
        text-align: center;
        &:first-child {
            border-top-left-radius: 5px;
        }
        &:last-child {
            border-top-right-radius: 5px;
        }
    }

    tbody tr {
        border-bottom: 1px solid #dddddd;
        &:nth-of-type(even) {
            background-color: #f3f3f3;
            &:hover {
                background-color: darken($color: #ddd, $amount: 5%);
            }
        }
        &:nth-of-type(odd) {
            background-color: #ddd;
            &:hover {
                background-color: darken($color: #ddd, $amount: 5%);
            }
        }
        &:last-of-type {
            border-bottom: 2px solid $custom-blue;
        }
    }
    .actions {
        display: table-cell; /* Cambia a display table-cell */
        vertical-align: middle; /* Centra verticalmente los botones */
        height: 100%;
        .btn-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }   
}

.pointer {
    cursor: pointer;
}

</style>