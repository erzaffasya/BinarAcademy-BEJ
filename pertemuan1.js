

class Famili {
    constructor(famili) {
        this.famili = famili;
    }
    _namaFamili() {
        return 'nama famili ' + this.famili +',';
    }
}

class Kegiatan extends Famili {
    constructor(famili, kegiatan) {
        super(famili);
        this.kegiatans = kegiatan;
    }
  
    show(){
        super._namaFamili()
        console.log(this._namaFamili() + " kesibukan " + this.kegiatans )
    }
}

class Berjalan extends Kegiatan {
    constructor(famili, kegiatan, berjalan) {
        super(famili, kegiatan);
        this.berjalans = berjalan;
    }

    #caraBerjalan = () => {
        console.log(' cara berjalan ' + this.berjalans) 
    }
    show() {
        return super.show() + this.#caraBerjalan()
    }
}

function tampilan(){
    let data = new Kegiatan("cicak", "berburu");
    let data2 = new Berjalan("cicak", "berburu", "jalan kaki");
    // data.show()
    data2.show()
    
}

tampilan()
