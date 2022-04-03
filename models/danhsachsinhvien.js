function DanhSachSinhVien(){
    this.danhSachSV = [];
    this.themSV = function(sinhVien){
        this.danhSachSV.push(sinhVien);
    };

    this.timViTriSV = function(maSV){
        var index = -1;
        for(i = 0; i < this.danhSachSV.length; i++){
            var sinhVien = this.danhSachSV[i];
            if(sinhVien.maSV === maSV){
                index = i;
                break;
            };
        };
        return index;
    };

    this.xoaSV = function(maSV){
        var index = this.timViTriSV(maSV);
        if(index !== -1){
            this.danhSachSV.splice(index, 1);
        };
    };

    this.layThongTinSV = function(maSV){
        // tìm vị trí 
        var index = this.timViTriSV(maSV);
        if(index !== -1){
            //Lấy thông tin sv
            var sinhVien = this.danhSachSV[index];
            return sinhVien;
        };
        //không tìm thấy thì trả về null
        return null;
    };

    this.timKiemSV = function(){
    };
};