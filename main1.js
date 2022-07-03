var color = prompt('Ban la sinh vien khoa bao nhieu : (nho them chu k truoc khoa cua minh)');
switch(color){
    case 'k18':
        document.write('xin chao chi  sinh vien 21 tuoi xinh dep');
    break;
    case 'k19':
        document.write('Xin chao chi sinh vien 20 tuoi sinh dep');
    break;
    case 'k20':
        document.write('Xin chao ban sinh vien 19 tuoi sinh dep ');
        break;
    case'k21':
        document.write('Xin chao be sinh vien 18 tuoi xinh dep')
        break;
        default:
        document.write('Nhap sai roi vui long nhap lai ');
}