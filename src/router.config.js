const PAGES = {
    home: '/',
    events: '/events',
}

export const ROUTES = {
    pages: PAGES,
    redirect: {
        event: (id) => `${PAGES.events}/${id}`
    }
}

