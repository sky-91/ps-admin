import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


import {MainData} from '../main/main-model';
import {ModalService} from '../shared/modal/modal.service';
import {ConfirmConfig} from '../shared/modal/modal-model';

import {AvatarCropperComponent} from '../business-shared/user/avatar-cropper.component';
import {PasswordEditComponent} from '../business-shared/user/password-edit.component';
import {AppService} from '../app.service';

/**
 * 主体组件
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['.//main.component.scss']
})
export class MainComponent implements OnInit {

  // 切换导航
  toggleDescTip = '点击关闭导航菜单';

  // 切换导航标识
  navClose = false;

  // 用户数据
  mainData: MainData = {
    userData: {
      userName: '管理员',
      userAvatar: './assets/img/user-header.png',
      mobilePhone: '131****1234',
      email: 'XXX@XXX.com',
      positions: '管理员',
    },
    menuData: [
      {
        'id': '10000',
        'parentId': '0',
        'name': '疆藏人员',
        'keyWord': 'jzry',
        'icon': 'fa-list',
        'children': [{
          'id': '10100',
          'parentId': '10000',
          'name': '疆藏人员导入',
          'keyWord': 'jzrydr',
          'icon': 'fa-upload',
          'url': '/app/special-person/special-person-upload'
        }, {
          'id': '10200',
          'parentId': '10000',
          'name': '疆藏人员录入',
          'keyWord': 'jzrylr',
          'icon': 'fa-plus-circle',
          'url': '/app/special-person/special-person-new'
        }, {
          'id': '10300',
          'parentId': '10000',
          'name': '疆藏人员列表',
          'keyWord': 'jzrylb',
          'icon': 'fa-table',
          'url': '/app/special-person/special-person-list'
        }]
      }, {
        'id': '20000',
        'parentId': '0',
        'name': '重点人员',
        'keyWord': 'zdry',
        'icon': 'fa-list',
        'children': [{
          'id': '20100',
          'parentId': '20000',
          'name': '重点人员导入',
          'keyWord': 'zdrydr',
          'icon': 'fa-upload',
          'url': '/app/important-person/important-person-upload'
        }, {
          'id': '20200',
          'parentId': '20000',
          'name': '重点人员录入',
          'keyWord': 'zdrylr',
          'icon': 'fa-plus-circle',
          'url': '/app/important-person/important-person-new'
        }, {
          'id': '20300',
          'parentId': '20000',
          'name': '重点人员列表',
          'keyWord': 'zdrylb',
          'icon': 'fa-table',
          'url': '/app/important-person/important-person-list'
        }, {
          'id': '20400',
          'parentId': '20000',
          'name': '轨迹积分导入',
          'keyWord': 'gjjfdr',
          'icon': 'fa-upload',
          'url': '/app/important-person/i-p-record-upload'
        }, {
          'id': '20500',
          'parentId': '20000',
          'name': '轨迹积分录入',
          'keyWord': 'gjjflr',
          'icon': 'fa-plus-circle',
          'url': '/app/important-person/i-p-record-new'
        }, {
          'id': '20600',
          'parentId': '20000',
          'name': '轨迹积分列表',
          'keyWord': 'gjjflb',
          'icon': 'fa-table',
          'url': '/app/important-person/i-p-record-list'
        }]
      }, {
        'id': '30000',
        'parentId': '0',
        'name': '群体活动',
        'keyWord': 'qthd',
        'icon': 'fa-list',
        'children': [{
          'id': '30100',
          'parentId': '30000',
          'name': '汇总信息导入',
          'keyWord': 'hzxxdr',
          'icon': 'fa-upload',
          'url': '/app/group/group-summary-upload'
        }, {
          'id': '30200',
          'parentId': '30000',
          'name': '汇总信息录入',
          'keyWord': 'hzxxlr',
          'icon': 'fa-plus-circle',
          'url': '/app/group/group-summary-new'
        }, {
          'id': '30300',
          'parentId': '30000',
          'name': '汇总信息列表',
          'keyWord': 'hzxxlb',
          'icon': 'fa-table',
          'url': '/app/group/group-summary-list'
        }, {
          'id': '30400',
          'parentId': '30000',
          'name': '活动记录导入',
          'keyWord': 'hdjldr',
          'icon': 'fa-upload',
          'url': '/app/group/group-record-upload'
        }, {
          'id': '30500',
          'parentId': '30000',
          'name': '活动记录录入',
          'keyWord': 'hdjllr',
          'icon': 'fa-plus-circle',
          'url': '/app/group/group-record-new'
        }, {
          'id': '30600',
          'parentId': '30000',
          'name': '活动记录列表',
          'keyWord': 'hdjllb',
          'icon': 'fa-table',
          'url': '/app/group/group-record-list'
        }]
      }, {
        'id': '40000',
        'parentId': '0',
        'name': '权限管理',
        'keyWord': 'qxgl',
        'icon': 'fa-user',
        'isExpend': false,
        'children': [{
          'id': '40100',
          'parentId': '40000',
          'name': '用户管理',
          'keyWord': 'yhgl',
          'icon': 'fa-user-circle-o',
          'isExpend': false,
          'children': [{
            'id': '40101',
            'parentId': '40100',
            'name': '用户添加',
            'keyWord': 'yhtj',
            'icon': 'fa-pencil-square-o',
            'url': '/app/user/userAdd'
          }, {
            'id': '40102',
            'parentId': '40100',
            'name': '用户列表',
            'keyWord': 'yhlb',
            'icon': 'fa-list-alt',
            'url': '/app/user/userList'
          }]
        }, {
          'id': '40200',
          'parentId': '40000',
          'name': '角色管理',
          'keyWord': 'jsgl',
          'icon': 'fa-users',
          'children': [{
            'id': '40201',
            'parentId': '40200',
            'name': '角色添加',
            'keyWord': 'jstj',
            'icon': 'fa-plus-circle',
            'url': '/app/role/roleAdd'
          }, {
            'id': '40202',
            'parentId': '40200',
            'name': '角色查询',
            'keyWord': 'jscx',
            'icon': 'fa-search',
            'url': '/app/role/roleList'
          }, {
            'id': '40203',
            'parentId': '40200',
            'name': '角色分配',
            'keyWord': 'jsfp',
            'icon': 'fa-cogs',
            'url': '/app/role/roleDis'
          }]
        }, {
          'id': '40300',
          'parentId': '40000',
          'name': '菜单管理',
          'keyWord': 'cdgl',
          'icon': 'fa-tree',
          'children': [{
            'id': '40301',
            'parentId': '40300',
            'name': '菜单添加',
            'keyWord': 'cdtj',
            'icon': 'fa-plus-circle',
            'url': 'menuAdd'
          }, {
            'id': '40302',
            'parentId': '40300',
            'name': '菜单查询',
            'keyWord': 'cdcx',
            'icon': 'fa-search',
            'url': 'menuList'
          }]
        }]
      },
      // {
      //   'id': '50000',
      //   'parentId': '0',
      //   'name': '组件示例',
      //   'keyWord': 'demo',
      //   'icon': 'fa-wrench',
      //   'isExpend': false,
      //   'children': [{
      //     'id': '50100',
      //     'parentId': '50000',
      //     'name': '消息框',
      //     'keyWord': 'mtk',
      //     'icon': 'fa-columns',
      //     'url': '/app/demo/toastDemo'
      //   }, {
      //     'id': '50200',
      //     'parentId': '50000',
      //     'name': '模态框',
      //     'keyWord': 'modal',
      //     'icon': 'fa-columns',
      //     'url': '/app/demo/modalDemo'
      //   }, {
      //     'id': '50300',
      //     'parentId': '50000',
      //     'name': '下拉',
      //     'keyWord': 'selectDemo',
      //     'icon': 'fa-circle',
      //     'url': '/app/demo/selectDemo'
      //   }, {
      //     'id': '50400',
      //     'parentId': '50000',
      //     'name': '图片裁剪',
      //     'keyWord': 'imgCropper',
      //     'icon': 'fa-file-picture-o',
      //     'url': '/app/demo/imgCropperDemo'
      //   }, {
      //     'id': '50500',
      //     'parentId': '50000',
      //     'name': '分页',
      //     'keyWord': 'pagination',
      //     'icon': 'fa-pagelines',
      //     'url': '/app/demo/paginationDemo'
      //   }, {
      //     'id': '50600',
      //     'parentId': '50000',
      //     'name': 'http分页',
      //     'keyWord': 'httpPagination',
      //     'icon': 'fa-pagelines',
      //     'url': '/app/demo/httpPaginationDemo'
      //   }, {
      //     'id': '50700',
      //     'parentId': '50000',
      //     'name': '日期选择',
      //     'keyWord': 'datepicker',
      //     'icon': 'fa-calendar',
      //     'url': '/app/demo/datepickerDemo'
      //   }, {
      //     'id': '50800',
      //     'parentId': '50000',
      //     'name': '文件上传',
      //     'keyWord': 'fileUpload',
      //     'icon': 'fa-upload',
      //     'url': '/app/demo/fileUploadDemo'
      //   }, {
      //     'id': '50900',
      //     'parentId': '50000',
      //     'name': 'ag-grid',
      //     'keyWord': 'agGridDemo',
      //     'icon': 'fa-table',
      //     'url': '/app/demo/agGridDemo'
      //   }, {
      //     'id': '51000',
      //     'parentId': '50000',
      //     'name': '简单数据表格',
      //     'keyWord': 'simpleDataTableDemo',
      //     'icon': 'fa-table',
      //     'url': '/app/demo/simpleDataTableDemo'
      //   }
      //   ]
      // }
    ]
  };

  title = '首页';

  constructor(private router: Router,
              private modalService: ModalService,
              private ngbModalService: NgbModal,
              private appService: AppService) {
    this.appService.titleEventEmitter.subscribe((value: string) => {
      if (value) {
        this.title = value;
      }
    });
  }

  /**
   * 初始化
   */
  ngOnInit() {
  }

  /**
   * 切换导航
   */
  toggleNav() {
    this.navClose = !this.navClose;
    if (this.navClose) {
      this.toggleDescTip = '点击展开导航菜单';
    } else {
      this.toggleDescTip = '点击关闭导航菜单';
    }
  }

  /**
   * 跳转首页
   */
  toHome() {
    this.title = '首页';
    this.router.navigate(['/app/home']);
  }

  /**
   * 个人资料
   */
  userInfo() {
    this.router.navigate(['/app/user/userInfo']);
  }

  /**
   * 头像更换
   */
  avatarReplacement() {
    this.ngbModalService.open(AvatarCropperComponent, {size: 'lg', backdrop: 'static', keyboard: false}).result.then((result) => {

    }, (reason) => {

    });
  }

  /**
   * 修改密码
   */
  passwordEdit() {
    this.ngbModalService.open(PasswordEditComponent, {size: 'lg'}).result.then((result) => {

    }, (reason) => {

    });
  }


  /**
   * 退出系统
   */
  exitSys() {
    const exitSysCfg = new ConfirmConfig('您确定退出系统吗？');
    this.modalService.confirm(exitSysCfg).then((result) => {
      if (result.status === 'approved') {
        this.router.navigate(['/login']);
      }
    }, (reason) => {
    });
  }

}


