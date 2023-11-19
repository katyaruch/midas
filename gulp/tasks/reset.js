import del from 'del'

export const reset = () =>  del(app.path.build.files)