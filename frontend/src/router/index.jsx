import { Home } from '@/pages'
import { MainLayout } from '@components'
import React from 'react'

export const router = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        //   {
        //     path: PATH.account,
        //     element: <Account />,
        //   },
        //   {
        //     path: PATH.movieDetail,
        //     element: <MovieDetail />,
        //   },
        //   {
        //     path: PATH.cinema,
        //     element: <Cinema />,
        //   },
        //   {
        //     path: PATH.purchase,
        //     element: (
        //       <AuthGuard>
        //         <Purchase />
        //       </AuthGuard>
        //     ),
        //   },
        ],
      },
]
