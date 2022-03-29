function getEle(id){
    return document.getElementById(id);
};

var danhSachSinhVien = new DanhSachSinhVien();

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
    
    // thêm sinh viên
    //khởi tạo đối tượng sinhVien
    var sinhVien = new SinhVien(_maSV, _tenSV, _email, _matKhau,
        _ngaySinh, _khoaHoc, _diemToan, _diemLy, _diemHoa);

    danhSachSinhVien.themSV(sinhVien);
    console.log(danhSachSinhVien);

    //hiển thị lên table: ý tưởng tạo thẻ thêm vào bảng
});
