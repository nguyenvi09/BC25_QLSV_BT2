function getEle(id){
    return document.getElementById(id);
};

var danhSachSV = new DanhSachSinhVien();
var validate = new Validation();

getEle("themSV").addEventListener("click", function(){
    // lấy dữ liệu người dùng nhập
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _email = getEle("txtEmail").value;
    var _matKhau = getEle("txtPass").value;
    var _ngaySinh = getEle("txtNgaySinh").value;
    var _khoaHoc = getEle("khSV").value;
    var _diemToan = getEle("txtDiemToan").value *1;
    var _diemLy = getEle("txtDiemLy").value *1;
    var _diemHoa = getEle("txtDiemHoa").value *1;

    // Kiểm tra validation
    validate.kiemTraRong(_maSV);

});