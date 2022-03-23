import 'react-devtools'
import {injectIntoGlobalHook} from 'react-refresh/runtime'

// https://github.com/facebook/react/issues/17552#issuecomment-883435016
injectIntoGlobalHook(window)

window.addEventListener('DOMContentLoaded', (e) => {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject(require('react-dom'))
    module.hot.accept()
})