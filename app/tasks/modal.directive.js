export default class ModalDirective {
  constructor() {
    console.log("directive MODAL");
    this.template = '<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-sm"><div class="modal-content" ng-transclude><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">Modal title</h4></div></div></div></div>';
    this.restrict = 'E';
    this.replace = true;
    this.scope = {
        visible: '=',
        onShow: '&',
        onHide: '&'
    };
    this.transclude = true;
    this.controller = 'TasksCtrl';
    this.controllerAs = 'tsk';
    this.link = function(scope, element, attrs) {
      console.log("directive MODAL");


                $(element).modal({
                    show: false,
                    keyboard: attrs.keyboard,
                    backdrop: attrs.backdrop
                });

                scope.$watch(function(){return scope.visible;}, function(value){

                    if(value == true){
                        $(element).modal('show');
                    }else{
                        $(element).modal('hide');
                    }
                });

                $(element).on('show.bs.modal', function(){
                  scope.$apply(function(){
                    scope.$parent[attrs.visible] = true;
                  });
                });

                $(element).on('show.bs.modal', function(){
                  scope.$apply(function(){
                      scope.onShow({});
                  });
                });

                $(element).on('hidden.bs.modal', function(){
                  scope.$apply(function(){
                    scope.$parent[attrs.visible] = false;
                  });
                });

                $(element).on('hidden.bs.modal', function(){
                  scope.$apply(function(){
                      scope.onHide({});
                  });
                });

    };
  }
}
