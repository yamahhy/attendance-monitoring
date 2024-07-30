<template>
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 class="text-2xl font-bold mb-4 text-center">Attendance Monitoring</h2>
        <div class="mb-4">
            <input
                v-model="name"
                type="text"
                placeholder="Enter Name"
                class="w-full px-4 py-2 border rounded-md"
            />
        </div>
        <div class="mb-4">
            <select
                v-model="status"
                class="w-full px-4 py-2 border rounded-md"
                @change="handleStatusChange"
            >
                <option value="" disabled>Select Status</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
            </select>
        </div>
        <div v-if="status === 'Absent'" class="mb-4">
            <input
                v-model="reason"
                type="text"
                placeholder="Enter Reason (if absent)"
                class="w-full px-4 py-2 border rounded-md"
            />
        </div>
        <div class="flex justify-center">
            <button
                @click="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Submit
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAttendance } from '@/composables/useAttendance.js'

    const name = ref('')
    const status = ref('')
    const reason = ref('')

    const { presentList, absentList } = useAttendance()

function handleStatusChange() {
    if (status.value === 'Present') {
        reason.value = ''
    }
}

function submit() {
    if (name.value === '') {
        alert('Please enter a name.')
        return
    }
    if (status.value === '') {
        alert('Please select a status.')
        return
    }
    if (status.value === 'Absent' && reason.value === '') {
        alert('Please enter a reason for absence.')
        return
    }

    const currentDate = new Date()
    const time = currentDate.toLocaleTimeString()
    const date = currentDate.toLocaleDateString()

    if (status.value === 'Present') {
        presentList.value.push({ name: name.value, time, date })
    } else {
        absentList.value.push({ name: name.value, time, date, reason: reason.value })
    }

    // Clear inputs after submission
    name.value = ''
    status.value = ''
    reason.value = ''
}
</script>
