import express from 'express'
import { UserRoutes } from '../app/module/user/user.routes'
const router = express.Router()

const moduleRoutes = [
    {
        path: '/user',
        route: UserRoutes,
    }
]


moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})


export const Routes = router