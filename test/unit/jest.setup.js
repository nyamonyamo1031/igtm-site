//import Vue from 'vue';
import { config,RouterLinkStub } from '@vue/test-utils'

// Mock Nuxt components
config.stubs['NuxtLink'] = RouterLinkStub;
config.stubs['font-awesome-icon'] = { template: "<i></i> "};
