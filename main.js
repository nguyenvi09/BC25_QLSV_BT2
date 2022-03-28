/**
 * yc: tạo file 2 file 2 lớp đối tượng
 */

function getEle(id){
    return document.getElementById(id);
};

//tạo mảng danhSachSV lưu thông tin các sinh viên
var danhSachSV = [];

getEle("themSV").addEventListener("click", function(){
    // lấy giá trị người dùng nhập
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _email = getEle("txtEmail").value;
    var _matKhau = getEle("txtPass").value;
    var _ngaySinh = getEle("txtNgaySinh").value;
    var _khoaHoc = getEle("khSV").value;
    var _diemToan = getEle("txtDiemToan").value *1;
    var _diemLy = getEle("txtDiemLy").value *1;
    var _diemHoa = getEle("txtDiemHoa").value *1;

    // tạo đối tượng sinhVien là 1 thể hiện của lớp đối tương SinhVien
    var sinhVien = new SinhVien(_maSV, _tenSV, _email, _matKhau,
        _ngaySinh, _khoaHoc, _diemToan, _diemLy, _diemHoa);
    console.log(sinhVien);
    sinhVien.tinhDTB();
    
//    sinhVien.dtb = sinhVien.tinhDTB();
//     console.log(dtb.toFixed(1));

    getEle("inSV").innerHTML = sinhVien.maSV + " - " + sinhVien.tenSV +
     " - " + sinhVien.email  + " - " + sinhVien.ngaySinh + " - " + sinhVien.khoaHoc
     + " - " + sinhVien.dtb;


     getEle("tbodySinhVien").innerHTML = 
     "<tr>" + 
        "<td>" + "</td"
     + "</tr>"
});