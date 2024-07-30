<template>
    <div class="min-h-screen flex flex-col">
        <header class="bg-blue-500 text-white py-4 shadow-md">
            <div class="container mx-auto px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-center lg:text-left">Attendance Monitoring</h1>
            </div>
        </header>
        <main class="flex-grow container mx-auto px-6 py-8 lg:px-8">
            <NuxtPage />
        </main>
        <footer class="bg-gray-800 text-white py-4 mt-auto">
            <div class="container mx-auto px-6 lg:px-8">
                <p class="text-center">© 2024 Attendance Monitoring. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    .container {
        max-width: 800px; /* Adjust as needed */
    }
</style>
