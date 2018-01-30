


class PAEpic {
    static getUsers = (action$) => {
        return action$.ofType(PAAction.GET_USERS)
            .switchMap(({ payload }) => {
                return new Observable((observer) => {
                    ref.on('child_added', (s) => {
                        observer.next({
                            type: PAAction.GET_USER_ADD,
                            payload: {
                                key: s.key,
                                val: s.val()
                            }
                        })
                    })
                })
            })
    }
}