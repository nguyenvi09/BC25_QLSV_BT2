function getEle(id){
    return document.getElementById(id);
};
//tạo đối tượng danhSachSinhVien từ lớp đt DanhSachSinhVien để quản lý sv
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
    
    // kiểm tra dữ liệu nhập
    kiemTraDL("txtMaSV");
    kiemTraDL("txtTenSV");
    kiemTraDL("txtPass");
    kiemTraEmail("txtEmail");
    kiemTraDLSo("txtDiemToan");
    kiemTraDLSo("txtDiemLy");
    kiemTraDLSo("txtDiemHoa");

    if(kiemTraDL("txtMaSV") == false || kiemTraDL("txtTenSV") == false
    || kiemTraDL("txtPass") == false || kiemTraEmail("txtEmail") == false
    || kiemTraDLSo("txtDiemToan") == false || kiemTraDLSo("txtDiemLy") == false
    || kiemTraDLSo("txtDiemHoa") == false){
        return;
    }

    // thêm sinh viên
    //khởi tạo đối tượng sinhVien
    var sinhVien = new SinhVien(_maSV, _tenSV, _email, _matKhau,
        _ngaySinh, _khoaHoc, _diemToan, _diemLy, _diemHoa);
    sinhVien.tinhDTB();
    danhSachSinhVien.themSV(sinhVien);
    console.log(danhSachSinhVien);

    capNhatSinhVien(danhSachSinhVien);

});


getEle("xoaSV").addEventListener("click", function(){
    danhSachSinhVien.xoaSV();
    console.log(danhSachSinhVien.danhSachSV);
    capNhatSinhVien(danhSachSinhVien);
});

//hàm tạo thẻ td
function taoTheTD (value)
{
    var td = document.createElement("td");
    td.innerHTML = value;
    return td;
}

// hàm cập nhật lại bảng thông tin sinh viên
function capNhatSinhVien(danhSachSinhVien){
    //lấy thẻ table 
    var tableSV = getEle("tbodySinhVien");
    tableSV.innerHTML = "";

    //hiển thị lên table: ý tưởng tạo thẻ thêm vào bảng
    //duyệt từng phần tử của mảng rồi thêm vào table
    for(i = 0; i < danhSachSinhVien.danhSachSV.length; i++){
        //lấy thuộc tính bên của từng phần tử trong mảng danhSachSV
        var thongtinSV = danhSachSinhVien.danhSachSV[i];
        // tạo thẻ tr
        var trSV = document.createElement("tr");
        //tạo thẻ td
        var tdMaSV = taoTheTD(thongtinSV.maSV);
        var tdTenSV = taoTheTD(thongtinSV.tenSV);
        var tdEmail = taoTheTD(thongtinSV.email);
        var tdNgaySinh = taoTheTD(thongtinSV.ngaySinh);
        var tdKhoaHoc = taoTheTD(thongtinSV.khoaHoc);
        var tdDTB = taoTheTD(thongtinSV.dtb);
        //nối td vào tr
        trSV.appendChild(tdMaSV);
        trSV.appendChild(tdTenSV);
        trSV.appendChild(tdEmail);
        trSV.appendChild(tdNgaySinh);
        trSV.appendChild(tdKhoaHoc);
        trSV.appendChild(tdDTB);
        //nối trSV vào tableSV
        tableSV.appendChild(trSV);
    };
};

// hàm kiểm tra dữ liệu bắt buộc nhập
function kiemTraDL(id){
    var empt = getEle(id).value;
    if(empt == ""){
        // dữ liệu không hợp lệ
        // thông báo nội dung lỗi
        getEle(id).style.borderColor = "red";
        return false;
    }else{
        // dữ liệu hợp lệ
        getEle(id).style.borderColor = "green";
        return true;
    };
};

//hàm kiểm tra email hợp lệ
function kiemTraEmail(id){
    var inputVal = getEle(id).value;

    // sử dụng chuỗi RegExp
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputVal.match(mailformat)){
        //Dữ liệu hợp lệ
        getEle(id).style.borderColor = "green";
        return true;
    }else{
        //dữ liệu không hợp lệ
        getEle(id).style.borderColor = "red";
        return false;
    };
};

// hàm kiểm tra dữ liệu là số
function kiemTraDLSo(id){
    var inputVal = getEle(id).value;

    // sử dụng chuỗi Regular expression
    var numbers = /^[0-9]+$/;
    if(inputVal.match(numbers)){
        // dữ liệu hợp lệ
        getEle(id).style.borderColor = "green";
        return true;
    }else{
        // dữ liệu không hợp lệ
        getEle(id).style.borderColor = "red";
        return false;
    };
};