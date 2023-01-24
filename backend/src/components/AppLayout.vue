<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">

            <SideBar />

            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''"
                id="main-content">

                <Navbar />

                <div class="p-6 bg-gray-100 mb-20">
                    <router-view />
                </div>

                

            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import SideBar from './SideBar.vue'
import Navbar from './Navbar.vue'


export default {
    name: 'AppLayout',
    computed: {
        ...mapState(['sideBarOpen'])
    },
    components: {
        SideBar,
        Navbar,
        
    }
}
</script>
