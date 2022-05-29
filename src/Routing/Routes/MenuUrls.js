
class MenuUrls{
    constructor() {
        this.menuLinkList = [
            {path: '/', text: "Башкы"},
            {path: '/news', text: "Жанылыктар"},
            {path: '/gallery', text: "Фотогалерея"},
            {path: '/timetable', text: "Расписание"},
            {path: '/teachers', text: "Мугалимдер"},
            {path: '/school_admission', text: "Мектепке кабыл алуу"},
            {path: '/school_docs', text: "Мектептин иш кагаздары"},
            {path: '/akkreditatsiya', text: "Аккредитация"},
            {path: '/GloryBoard', text: "Ардак тактасы"},
            {path: '/notification',text: "Кулактандыруу"},
            {path: '/feedback',text: "Байланыш"},
        ]
    }

    getMenuList (){
        return this.menuLinkList
    }
}

export default new MenuUrls();