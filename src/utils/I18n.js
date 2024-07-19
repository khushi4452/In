import languageConfig from "./lang.json";

const I18n = ({ Keyword }, placeholder, value) => {
    const lang = localStorage.getItem("lang") || "en";
    const text = languageConfig[lang] && languageConfig[lang][Keyword];

    if (!text) {
        console.error(`Keyword '${Keyword}' not found in language '${lang}'.`);
        return '';
    }

    if (placeholder && value) {
        const regex = new RegExp(placeholder, 'g');
        return text.replace(regex, value);
    }

    return text;
};

export default I18n;
