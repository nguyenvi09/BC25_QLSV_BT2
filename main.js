function getEle(id){
    return document.getElementById(id);
};
//tạo đối tượng danhSachSinhVien từ lớp đt DanhSachSinhVien
var danhSachSinhVien = new DanhSachSinhVien();
getLocalStorage();

//tạo hàm lấy thông tin sinh viên trả về đối tượng sinhVien
function layThongTinSV(){
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
    sinhVien.tinhDTB();

    return sinhVien;
};

getEle("themSV").addEventListener("click", function(){
    
    // kiểm tra dữ liệu nhập
    // kiemTraDL("txtMaSV");
    // kiemTraDL("txtTenSV");
    // kiemTraDL("txtPass");
    // kiemTraEmail("txtEmail");
    // kiemTraDLSo("txtDiemToan");
    // kiemTraDLSo("txtDiemLy");
    // kiemTraDLSo("txtDiemHoa");

    // if(kiemTraDL("txtMaSV") == false || kiemTraDL("txtTenSV") == false
    // || kiemTraDL("txtPass") == false || kiemTraEmail("txtEmail") == false
    // || kiemTraDLSo("txtDiemToan") == false || kiemTraDLSo("txtDiemLy") == false
    // || kiemTraDLSo("txtDiemHoa") == false){
    //     return;
    // };

    var sinhVien = layThongTinSV();
    danhSachSinhVien.themSV(sinhVien);

    taoBang(danhSachSinhVien.danhSachSV);
    setLocalStorage();
    getLocalStorage();
});

//hàm tạo bảng cách 1

// function taoBang(danhSachSV){
//     //reset tbody vì bị lặp dòng hiển thị khi chạy for
//     getEle("tbodySinhVien").innerHTML = "";
//     for(i = 0; i < danhSachSV.length; i++){
//         var sv = danhSachSV[i];
        
//         //tạo dòng
//         var tagTR = document.createElement("tr");

//         //tạo cột
//         var tagTD_MaSV = document.createElement("td");
//         var tagTD_TenSV = document.createElement("td");
//         var tagTD_Email = document.createElement("td");
//         var tagTD_NgaySinh = document.createElement("td");
//         var tagTD_KhoaHoc = document.createElement("td");
//         var tagTD_DTB = document.createElement("td");

//         // gán nội dung cho từng cột
//         tagTD_MaSV.innerHTML = sv.maSV;
//         tagTD_TenSV.innerHTML = sv.tenSV;
//         tagTD_Email.innerHTML = sv.email;
//         tagTD_NgaySinh.innerHTML = sv.ngaySinh;
//         tagTD_KhoaHoc.innerHTML = sv.khoaHoc;
//         tagTD_DTB.innerHTML = sv.dtb;

//         //nối từng cột vào dòng appendChild()
//         tagTR.appendChild(tagTD_MaSV);
//         tagTR.appendChild(tagTD_TenSV);
//         tagTR.appendChild(tagTD_Email);
//         tagTR.appendChild(tagTD_NgaySinh);
//         tagTR.appendChild(tagTD_KhoaHoc);
//         tagTR.appendChild(tagTD_DTB);

//         //append dòng vào tbody
//         getEle("tbodySinhVien").appendChild(tagTR);
//     };  
// };


function taoBang(danhSachSV){
    //tạo biến tích lũy tạo ra nhiều dòng
    var content = "";
    for(i = 0; i < danhSachSV.length; i++){
        var sv = danhSachSV[i];
        content += `
            <tr>
                <td>${sv.maSV}</td>
                <td>${sv.tenSV}</td>
                <td>${sv.email}</td>
                <td>${sv.ngaySinh}</td>
                <td>${sv.khoaHoc}</td>
                <td>${sv.dtb}</td>
                <td>
                    <button class="btn btn-info" onclick="suaSV('${sv.maSV}')">Sửa</button>
                    <button class="btn btn-danger" onclick="xoaSV('${sv.maSV}')">Xóa</button>
                </td>
            </tr>
        `;
    };
    getEle("tbodySinhVien").innerHTML = content;
};

/**
 * Xóa SV
 */
function xoaSV(maSV){
    //gọi hàm tìm viTriSinhVien
    // var index = danhSachSinhVien.timViTriSV(maSV);
    //xóa sv
    danhSachSinhVien.xoaSV(maSV);
    //render tbody
    taoBang(danhSachSinhVien.danhSachSV);
    //lưu LocalStorage
    setLocalStorage();
};

function setLocalStorage(){
    //chuyển danhSachSinhVien.danhSachSV từ JSON => String
    var dataString = JSON.stringify(danhSachSinhVien.danhSachSV);

    //Lưu danhSachSinhVien.danhSachSV xuống localStorage
    localStorage.setItem("DSSV", dataString);
}

//  lấy dữ liệu lưu trước đó render ra
function getLocalStorage(){
    var dataString = localStorage.getItem("DSSV");
    if(dataString){
        //chuyển từ String => JSON
        var dataJson = JSON.parse(dataString);
        //nạp data vào danhSachSinhVien.danhSachSV vì khi ta reload lại
        //trang web thì web sẽ render html -> js lại => this.danhSachSV = [];
        // trong lớp đối tượng sẽ được gọi lại là đang rỗng
        danhSachSinhVien.danhSachSV = dataJson;
        // render tbody
        taoBang(danhSachSinhVien.danhSachSV);
    };
};

/**
 * Sửa sv
 * tìm vị trí -> lấy được nguyên thông tin sv
 * dom ra giao diện
 * 
 */

function suaSV(maSV){
    var sinhVien = danhSachSinhVien.layThongTinSV(maSV);
    console.log(sinhVien);
    //dom tới các thẻ input show thông tin ra ngoài
    getEle("txtMaSV").value = sinhVien.maSV;
    //khóa thẻ input maSV: không cho thay đổi vì mã là duy nhất
    getEle("txtMaSV").disabled = true;
    getEle("txtTenSV").value = sinhVien.tenSV;
    getEle("txtEmail").value = sinhVien.email;
    getEle("txtPass").value = sinhVien.matKhau;
    getEle("txtNgaySinh").value = sinhVien.ngaySinh;
    getEle("khSV").value = sinhVien.khoaHoc;
    getEle("txtDiemToan").value = sinhVien.diemToan;
    getEle("txtDiemLy").value = sinhVien.diemLy;
    getEle("txtDiemHoa").value = sinhVien.diemHoa;
};

/**
 * cập nhật sv
 */

getEle("btnCapNhat").addEventListener("click", function(){
   var sinhVien = layThongTinSV();
   danhSachSinhVien.capNhatSinhVien(sinhVien);
   taoBang(danhSachSinhVien.danhSachSV);
    setLocalStorage();
});


































































// getEle("xoaSV").addEventListener("click", function(){
//     danhSachSinhVien.xoaSV();
//     console.log(danhSachSinhVien.danhSachSV);
//     capNhatSinhVien(danhSachSinhVien);
// });

//hàm tạo thẻ td




















function taoTheTD (value)
{
    var td = document.createElement("td");
    td.innerHTML = value;
    return td;
};

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