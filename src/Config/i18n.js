import * as Localization from "expo-localization";
import es from "../Translations/es.json";
import en from "../Translations/en.json";
import es_AR from "../Translations/es-AR.json";
import es_ES from "../Translations/es-ES.json";

import { I18n } from "i18n-js";

/*I18N Config*/
const i18n = new I18n({ ...en, ...es, ...es_AR, ...es_ES});

i18n.fallbacks = true;
i18n.locale = Localization.locale;

export default i18n;
