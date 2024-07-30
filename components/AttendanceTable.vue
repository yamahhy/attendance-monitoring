<template>
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-xl font-bold mb-4 text-center">{{ title }}</h2>
        <table class="w-full border-collapse">
            <thead>
                <tr>
                    <th class="border px-4 py-2">Name</th>
                    <th class="border px-4 py-2">Time</th>
                    <th class="border px-4 py-2">Date</th>
                    <th v-if="hasReason" class="border px-4 py-2">Reason</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in list" :key="entry.name + entry.date">
                    <td class="border px-4 py-2">{{ entry.name }}</td>
                    <td class="border px-4 py-2">{{ entry.time }}</td>
                    <td class="border px-4 py-2">{{ entry.date }}</td>
                    <td v-if="hasReason" class="border px-4 py-2">{{ entry.reason }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: String,
    list: Array,
    hasReason: {
        type: Boolean,
        default: false,
    },
})
</script>
