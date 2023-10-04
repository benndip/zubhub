import { I18n } from 'i18n-js'
import en from '../../translations/en/translation.json'
import hi from '../../translations/hi/translation.json'

import * as at from '../actionTypes';

export const i18n = new I18n({ en, hi })

const default_state = {
    i18n,
}

const LanguageReducer = (state = default_state, action) => {
    switch (action.type) {
        case at.CHANGE_LANGUAGE:
            const newI18n = new I18n()
            newI18n.locale = action.payload.locale
            newI18n.enableFallback = true
            newI18n.translations = { en, hi }
            localStorage.setItem('locale', action.payload)
            return {
                ...state,
                i18n: newI18n
            }
        default:
            return state
    }
}

export default LanguageReducer