import Vue from 'vue'
import { AclInstaller, AclRule, AclCreate } from 'vue-acl'
import router from '@/routers'

Vue.use(AclInstaller)

export default new AclCreate({
    initial: 'public',
    notfound: {
        path: '/error',
        forwardQueryParams: true
    },
    router,
    acceptLocalRules: true,
    globalRules: {
        isAdmin: new AclRule('admin').generate(),
        isPublic: new AclRule('public').or('admin').generate(),
        isLogged: new AclRule('user').and('inside').generate()
    }
})