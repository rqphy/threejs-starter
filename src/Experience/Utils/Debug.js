import * as dat from 'lil-gui'

export default class Debug
{
    constructor()
    {
        this.active = window.location.hast === '#debug'

        if(this.active)
        {
            this.ui = new dat.GUI()
        }
    }
}