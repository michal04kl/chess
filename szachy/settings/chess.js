$(document).ready(function(){
    resize();
    //pieces

    //white
    const wp1 = {
        piece: "pawn",
        active: "block",
        color: "w",
        coord: document.getElementById("wp1").style.gridArea.substring(0, 5),
        row: document.getElementById("wp1").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp1").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const wp2 = {
        piece: "pawn",
        active: "block",
        color: "w",
        coord: document.getElementById("wp2").style.gridArea.substring(0, 5),
        row: document.getElementById("wp2").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp2").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const wp3 = {
        piece: "pawn",
        active: "block",
        color: "w",
        coord: document.getElementById("wp3").style.gridArea.substring(0, 5),
        row: document.getElementById("wp3").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp3").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const wp4 = {
        piece: "pawn",
        active: "block",
        color: "w",
        coord: document.getElementById("wp4").style.gridArea.substring(0, 5),
        row: document.getElementById("wp4").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp4").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const wp5 = {
        piece: "pawn",
        active: "block",
        color: "w",
        coord: document.getElementById("wp5").style.gridArea.substring(0, 5),
        row: document.getElementById("wp5").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp5").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const wp6 = {
        piece: "pawn",
        active: "block",
        color: "w",
        coord: document.getElementById("wp6").style.gridArea.substring(0, 5),
        row: document.getElementById("wp6").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp6").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const wp7 = {
        piece: "pawn",
        active: "block",
        color: "w",
        coord: document.getElementById("wp7").style.gridArea.substring(0, 5),
        row: document.getElementById("wp7").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp7").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const wp8 = {
        piece: "pawn",
        active: "block",
        color: "w",
        coord: document.getElementById("wp8").style.gridArea.substring(0, 5),
        row: document.getElementById("wp8").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp8").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const wp9 = {
        piece: "king",
        active: "block",
        color: "w",
        coord: document.getElementById("wp9").style.gridArea.substring(0, 5),
        row: document.getElementById("wp9").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp9").style.gridArea.charAt(4)*1,
        moved: 0,
        check: 0,
        castle: 0,
        protect: 0,
    };
 
    const wp10 = {
        piece: "queen",
        active: "block",
        color: "w",
        coord: document.getElementById("wp10").style.gridArea.substring(0, 5),
        row: document.getElementById("wp10").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp10").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const wp11 = {
        piece: "bishop",
        active: "block",
        color: "w",
        coord: document.getElementById("wp11").style.gridArea.substring(0, 5),
        row: document.getElementById("wp11").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp11").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const wp12 = {
        piece: "bishop",
        active: "block",
        color: "w",
        coord: document.getElementById("wp12").style.gridArea.substring(0, 5),
        row: document.getElementById("wp12").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp12").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const wp13 = {
        piece: "horse",
        active: "block",
        color: "w",
        coord: document.getElementById("wp13").style.gridArea.substring(0, 5),
        row: document.getElementById("wp13").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp13").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const wp14 = {
        piece: "horse",
        active: "block",
        color: "w",
        coord: document.getElementById("wp14").style.gridArea.substring(0, 5),
        row: document.getElementById("wp14").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp14").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const wp15 = {
        piece: "rook",
        active: "block",
        color: "w",
        coord: document.getElementById("wp15").style.gridArea.substring(0, 5),
        row: document.getElementById("wp15").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp15").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const wp16 = {
        piece: "rook",
        active: "block",
        color: "w",
        coord: document.getElementById("wp16").style.gridArea.substring(0, 5),
        row: document.getElementById("wp16").style.gridArea.charAt(0)*1,
        col: document.getElementById("wp16").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
    /*--------------------*/

    //black
    const bp1 = {
        piece: "pawn",
        active: "block",
        color: "b",
        coord: document.getElementById("bp1").style.gridArea.substring(0, 5),
        row: document.getElementById("bp1").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp1").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const bp2 = {
        piece: "pawn",
        active: "block",
        color: "b",
        coord: document.getElementById("bp2").style.gridArea.substring(0, 5),
        row: document.getElementById("bp2").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp2").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const bp3 = {
        piece: "pawn",
        active: "block",
        color: "b",
        coord: document.getElementById("bp3").style.gridArea.substring(0, 5),
        row: document.getElementById("bp3").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp3").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const bp4 = {
        piece: "pawn",
        active: "block",
        color: "b",
        coord: document.getElementById("bp4").style.gridArea.substring(0, 5),
        row: document.getElementById("bp4").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp4").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const bp5 = {
        piece: "pawn",
        active: "block",
        color: "b",
        coord: document.getElementById("bp5").style.gridArea.substring(0, 5),
        row: document.getElementById("bp5").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp5").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const bp6 = {
        piece: "pawn",
        active: "block",
        color: "b",
        coord: document.getElementById("bp6").style.gridArea.substring(0, 5),
        row: document.getElementById("bp6").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp6").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const bp7 = {
        piece: "pawn",
        active: "block",
        color: "b",
        coord: document.getElementById("bp7").style.gridArea.substring(0, 5),
        row: document.getElementById("bp7").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp7").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const bp8 = {
        piece: "pawn",
        active: "block",
        color: "b",
        coord: document.getElementById("bp8").style.gridArea.substring(0, 5),
        row: document.getElementById("bp8").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp8").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const bp9 = {
        piece: "king",
        active: "block",
        color: "b",
        coord: document.getElementById("bp9").style.gridArea.substring(0, 5),
        row: document.getElementById("bp9").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp9").style.gridArea.charAt(4)*1,
        moved: 0,
        check: 0,
        castle: 0,
        protect: 0,
    };

    const bp10 = {
        piece: "queen",
        active: "block",
        color: "b",
        coord: document.getElementById("bp10").style.gridArea.substring(0, 5),
        row: document.getElementById("bp10").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp10").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const bp11 = {
        piece: "bishop",
        active: "block",
        color: "b",
        coord: document.getElementById("bp11").style.gridArea.substring(0, 5),
        row: document.getElementById("bp11").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp11").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const bp12 = {
        piece: "bishop",
        active: "block",
        color: "b",
        coord: document.getElementById("bp12").style.gridArea.substring(0, 5),
        row: document.getElementById("bp12").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp12").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const bp13 = {
        piece: "horse",
        active: "block",
        color: "b",
        coord: document.getElementById("bp13").style.gridArea.substring(0, 5),
        row: document.getElementById("bp13").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp13").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const bp14 = {
        piece: "horse",
        active: "block",
        color: "b",
        coord: document.getElementById("bp14").style.gridArea.substring(0, 5),
        row: document.getElementById("bp14").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp14").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };

    const bp15 = {
        piece: "rook",
        active: "block",
        color: "b",
        coord: document.getElementById("bp15").style.gridArea.substring(0, 5),
        row: document.getElementById("bp15").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp15").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
 
    const bp16 = {
        piece: "rook",
        active: "block",
        color: "b",
        coord: document.getElementById("bp16").style.gridArea.substring(0, 5),
        row: document.getElementById("bp16").style.gridArea.charAt(0)*1,
        col: document.getElementById("bp16").style.gridArea.charAt(4)*1,
        moved: 0,
        protect: 0,
    };
    /*--------------------*/

    //asign moves and killing
    wp1.go = moves(wp1);
    wp1.kill = danger(wp1);
    wp2.go = moves(wp2);
    wp2.kill = danger(wp2); 
    wp3.go = moves(wp3);
    wp3.kill = danger(wp3);
    wp4.go = moves(wp4);
    wp4.kill = danger(wp4);
    wp5.go = moves(wp5);
    wp5.kill = danger(wp5);
    wp6.go = moves(wp6);
    wp6.kill = danger(wp6);
    wp7.go = moves(wp7);
    wp7.kill = danger(wp7); 
    wp8.go = moves(wp8);
    wp8.kill = danger(wp8);
    wp10.go = moves(wp10);
    wp10.kill = danger(wp10);
    wp11.go = moves(wp11);
    wp11.kill = danger(wp11); 
    wp12.go = moves(wp12);
    wp12.kill = danger(wp12); 
    wp13.go = moves(wp13);
    wp13.kill = danger(wp13);
    wp14.go = moves(wp14);
    wp14.kill = danger(wp14);
    wp15.go = moves(wp15);
    wp15.kill = danger(wp15); 
    wp16.go = moves(wp16);
    wp16.kill = danger(wp16); 

    bp1.go = moves(bp1);
    bp1.kill = danger(bp1);
    bp2.go = moves(bp2);
    bp2.kill = danger(bp2); 
    bp3.go = moves(bp3);
    bp3.kill = danger(bp3);
    bp4.go = moves(bp4);
    bp4.kill = danger(bp4); 
    bp5.go = moves(bp5);
    bp5.kill = danger(bp5);
    bp6.go = moves(bp6);
    bp6.kill = danger(bp6);
    bp7.go = moves(bp7);
    bp7.kill = danger(bp7);
    bp8.go = moves(bp8);
    bp8.kill = danger(bp8);
    bp10.go = moves(bp10);
    bp10.kill = danger(bp10); 
    bp11.go = moves(bp11);
    bp11.kill = danger(bp11); 
    bp12.go = moves(bp12);
    bp12.kill = danger(bp12);
    bp13.go = moves(bp13);
    bp13.kill = danger(bp13);
    bp14.go = moves(bp14);
    bp14.kill = danger(bp14);
    bp15.go = moves(bp15);
    bp15.kill = danger(bp15);
    bp16.go = moves(bp16);
    bp16.kill = danger(bp16);

    wp9.go = moves(wp9);
    wp9.kill = danger(wp9);

    bp9.go = moves(bp9);
    bp9.kill = danger(bp9);
    /*--------------------*/

    //values and quick actions
    assign_all();
    resize();
    window.addEventListener("resize", resize);
    var current_piece = 0;
    var turn = 0;
    turns();
    var promote = 0;
    var promote_piece = 0;
    var warnded = 1;
    var move_count = 0;
    var last_mov = [];
    var old_turn = turn;
    /*--------------------*/

    /**
     * function gives texture to all pieces  
     */
    function assign_all(){
        Array.prototype.forEach.call($("#chess_mov a"), function(item){
            let pic = eval($(item).attr("id"));
            let col = pic.color;
            let name = pic.piece;
            document.getElementById($(item).attr("id")).style.backgroundImage="url(./settings/chess/"+col+name+".png)";
        });
    };
    /*--------------------*/

    /**
     * function resizes all chess elements to current screen window demensions 
     */
    function resize(){
        let width = window.innerWidth;
        width = (width/900)*0.75;
        let height = window.innerHeight;
        height = (height/900)*0.75;
        if(width < height){
          $("#pola").css("transform", "scale("+width+")");  
          $("#decoy").css("transform", "scale("+width+")"); 
          $("#wpp").css("transform", "scale("+width+")");
          $("#bpp").css("transform", "scale("+width+")");
          $("#wpp").css("top", $("#pola")[0].getBoundingClientRect().top-(parseInt($("#pola h1").css("margin-top"))*4));
          $("#bpp").css("top", $("#pola")[0].getBoundingClientRect().top-(parseInt($("#pola h1").css("margin-top"))*4));
        }else if(height < width){
          $("#pola").css("transform", "scale("+height+")");
          $("#decoy").css("transform", "scale("+height+")");
          $("#wpp").css("transform", "scale("+height+")");
          $("#bpp").css("transform", "scale("+height+")");
          $("#wpp").css("top", $("#pola")[0].getBoundingClientRect().top-(parseInt($("#pola h1").css("margin-top"))*4));
          $("#bpp").css("top", $("#pola")[0].getBoundingClientRect().top-(parseInt($("#pola h1").css("margin-top"))*4));
        };
    };

    /**
     * function gives texture to chosen piece
     * @param {object} pic - chosen piece (html equivalent of piece (in this project its 'a') picked by getElementById or $()) 
     */
    function assign(pic){
        let th = eval($(pic).attr("id"));
        let col = th.color;
        let name = th.piece;
        let act = th.active;
        document.getElementById($(pic).attr("id")).style.backgroundImage="url(./settings/chess/"+col+name+".png)";
        document.getElementById($(pic).attr("id")).style.display=act;
    };

    //actions
    $("a").mousedown(function(cp){
        /**
         * function assigns 'current_piece'
         * @param {object} cp - event target (chess piece 'a') 
         */
        current_piece = cp.target;
        $("#decoy").css({
            width: $(current_piece).css("width"),
            height: $(current_piece).css("height")
        });
    });

    $(window).mousemove(function(event){
        /**
         * function detects plates that are under a mouse, modify its class by giving it '_over'
         * @param {object} event - parameter needed to read x and y of mouse
         */
        if(current_piece!==0){
            let decoy = $("#decoy");
            $(current_piece).css("display", "none");
            decoy[0].style.backgroundImage=current_piece.style.backgroundImage;
            decoy.css({
                left: event.clientX-((decoy.css("width").substring(0, (decoy.css("width").length)-2))*1)/2,
                top: event.clientY-((decoy.css("height").substring(0, (decoy.css("height").length)-2))*1)/2
            });
            decoy[0].style.display="block";
            let under = plate(event.clientX, event.clientY);
            if(under!=undefined){
            $(under).attr("class", $(under).attr("class").substring(0, 5)+"_over");
            };
            let all_over = $("#plate div[class*='_over']");
            if(all_over.length > 1){
                for(let i = 0; i < all_over.length; i++){
                    if(all_over[i]!=under[0]){
                        $(all_over[i]).attr("class", $(all_over[i]).attr("class").substring(0, 5));
                    };
                };
            };
        };
    });

    $("#decoy").mouseup(function(){
        /**
         * function checks if move was possible and calculates consequencys of that move
         */
        var current_object = eval($(current_piece).attr("id"));
        var land_coord = $("#plate div[class*='_over']").css("grid-area").substring(0, 5);
        let kill_spr = [];
        if(current_object.kills!==0){
        Array.prototype.forEach.call(current_object.kill, function(kills){
            kills = kills[0];
            kill_spr.push(kills); 
        })};
        if((current_object.go==0 || current_object.go.indexOf(land_coord)==-1) && (current_object.kill==0 || kill_spr.indexOf(land_coord)==-1) && eval($("#"+current_object.color+"p9").attr("id")).check==1){
            Array.prototype.forEach.call($("#plate *"), function(plate){
                if($(plate).css("grid-area").substring(0,5)==eval($("#"+current_object.color+"p9").attr("id")).coord){    
                warning(plate);
                }}); 
        }else{
        wp9.check = 0;
        bp9.check = 0;
        if(current_object.go !== 0 && current_object.go.indexOf(land_coord)!=-1){
            end_mov(current_object, land_coord);
        }else if(current_object.kill!==0){
            var current_frags = [];
            var current_frags_go = [];
                for(let i = 0; i < current_object.kill.length; i++){
                    current_frags.push(current_object.kill[i][1]);
                    current_frags_go.push(current_object.kill[i][0]);
                };
            if(current_frags_go.indexOf(land_coord)!=-1){
                let lp = current_frags_go.indexOf(land_coord);
                let killed = current_frags[lp];
                let killed_object = eval($(killed).attr("id"));
                killed_object.active = "none";
                killed_object.protect = 0;
                assign(killed);
                end_mov(current_object, land_coord);
            }};
        if(current_object.piece=="king"){
            if(current_object.castle!==0){
                let castle_king_coord = [];
                let castle_tower_coord = [];
                let tower = [];
                for(let i = 0; i<current_object.castle.length; i++){
                    castle_king_coord.push(current_object.castle[i][0]);
                    castle_tower_coord.push(current_object.castle[i][1]);
                    tower.push(current_object.castle[i][2]);
                };
              if(castle_king_coord.indexOf(land_coord)!=-1){
                let inx = castle_king_coord.indexOf(land_coord);
                castle_tower_coord = castle_tower_coord[inx];
                tower = tower[inx];
                $(current_piece).css("grid-area", land_coord);
                $(tower).css("grid-area", castle_tower_coord);
                tower = eval($(tower[inx]).attr("id"));
                tower.moved = 1;
                tower.coord = $(current_piece).css("grid-area").substring(0, 5);
                tower.row = $(current_piece).css("grid-area").charAt(0)*1;
                tower.col = $(current_piece).css("grid-area").charAt(4)*1;
                current_object.moved = 1;
                current_object.coord = $(current_piece).css("grid-area").substring(0, 5);
                current_object.row = $(current_piece).css("grid-area").charAt(0)*1;
                current_object.col = $(current_piece).css("grid-area").charAt(4)*1;
                if(turn == 0){turn = 1}else if(turn == 1){turn = 0};
        turns();
        Array.prototype.forEach.call($("#chess_mov a"), function(item){    
        let object = eval($(item).attr("id"));
        if(object.piece!="king"){
        object.go = moves(object);
        object.kill = danger(object);
        };
    });
        bp9.kill = danger(bp9);
        wp9.kill = danger(wp9);
        bp9.kill = danger(bp9);
        bp9.go = moves(bp9);
        wp9.go = moves(wp9);
        bp9.go = moves(bp9);
              };  
            };
        };
        let check_spr = eval(current_object.color+"p9").check;
            if(check_spr == 0){
            if(current_object.color=="w"){
                check_spr = bp9;
            }else if(current_object.color=="b"){
                check_spr = wp9;
            };
            if(check_spr.check==1){
                let who = current_object.piece;
                let path = [current_object.coord];
                if(who == "queen" || who == "rook" || who == "bishop"){
                    let test_path = current_object.go;
                    if(test_path!==0){
                        let king_row = check_spr.row;
                        let king_col = check_spr.col;
                        let piece_row = current_object.row;
                        let piece_col = current_object.col;
                        let row_spr = king_row-piece_row;
                        let col_spr = king_col-piece_col;
                        if(row_spr > 0){
                            for(let i = 0; i < test_path.length; i++){
                                let coord = test_path[i];
                                let row = coord.charAt(0)*1;
                                if(row <= piece_row){
                                   test_path.splice(i,1); 
                                   i--;
                                };
                            };
                        }else if(row_spr < 0){
                            for(let i = 0; i < test_path.length; i++){
                                let coord = test_path[i];
                                let row = coord.charAt(0)*1;
                                if(row >= piece_row){
                                   test_path.splice(i,1); 
                                   i--;
                                };
                            };
                        }else if(row_spr == 0){
                            for(let i = 0; i < test_path.length; i++){
                                let coord = test_path[i];
                                let row = coord.charAt(0)*1;
                                if(row != piece_row){
                                   test_path.splice(i,1); 
                                   i--;
                                };
                            };
                        };

                        if(col_spr > 0){
                            for(let i = 0; i < test_path.length; i++){
                                let coord = test_path[i];
                                let col = coord.charAt(4)*1;
                                if(col <= piece_col){
                                   test_path.splice(i,1); 
                                   i--;
                                };
                            };
                        }else if(col_spr < 0){
                            for(let i = 0; i < test_path.length; i++){
                                let coord = test_path[i];
                                let col = coord.charAt(4)*1;
                                if(col >= piece_col){
                                   test_path.splice(i,1); 
                                   i--;
                                };
                            };
                        }else if(col_spr==0){
                            for(let i = 0; i < test_path.length; i++){
                                let coord = test_path[i];
                                let col = coord.charAt(4)*1;
                                if(col != piece_col){
                                   test_path.splice(i,1); 
                                   i--;
                                };
                            };
                        };
                        if(test_path.length!=0){
                            Array.prototype.forEach.call(test_path, function(coord){
                                path.push(coord);
                            });
                        };
                        Array.prototype.forEach.call($("#chess_mov a"), function(piece){
                            let who = eval($(piece).attr("id"));
                            if(who.color!=current_object.color && (who.go !== 0 || who.kill !== 0) && who.piece!="king"){
                                if(who.go !== 0){
                                    for(let i = 0; i < who.go.length; i++){
                                        let coord = who.go[i];
                                        if(path.indexOf(coord)==-1){
                                            who.go.splice(i,1);
                                            i--;
                                        };
                                        if(who.go.length == 0){
                                            who.go = 0;
                                        }; 
                                    }};
                                if(who.kill !== 0){
                                    for(let i = 0; i < who.kill.length; i++){
                                        let all = who.kill[i];
                                        let piece = all[1];
                                        if($(piece).attr("id")!=$(current_piece).attr("id")){
                                            who.kill.splice(i,1);
                                            i--;
                                        };
                                        if(who.kill.length == 0){
                                            who.kill = 0;
                                        };
                                    }};
                            };
                        });
                    };
                };
            };
        };
        Array.prototype.forEach.call($("#chess_mov a"), function(item){
            let who = eval($(item).attr("id"));
            if(who.active=="block"){
            if(who.piece=="bishop" || who.piece=="rook" || who.piece=="queen"){
                pin(who);
            }};
        });
        end_game(check_spr);
        material();
        stealmate_rep();
        move_count++;
    };
        $("#decoy").css("display", "none");
        $(current_piece).css("display", "block");
        if(promote==0){current_piece = 0};
});

    /**
     * function exequtes and calculates qonsequentions of move
     * @param {object} current_object - javascript object that name is an equivalent of 'current_piece' id
     * @param {string} land_coord - grid-area coordinates ('x / y') of 'current_piece' 
     */
    function end_mov(current_object, land_coord){
        if($(".ep").length>0){$(".ep").attr("class", "")};
        $(current_piece).css("grid-area", land_coord);
        if(current_object.piece=="pawn" && current_object.moved == 0 && (current_object.row+2 == land_coord.charAt(0)*1 || current_object.row-2 == land_coord.charAt(0)*1)){
            $(current_piece).attr("class", "ep");
        };
        current_object.moved = 1;
        current_object.coord = $(current_piece).css("grid-area").substring(0, 5);
        current_object.row = $(current_piece).css("grid-area").charAt(0)*1;
        current_object.col = $(current_piece).css("grid-area").charAt(4)*1;
        if(current_object.piece=="pawn" && (current_object.row==1 || current_object.row==8)){
            promote = 1;
            $("#chess_mov *").css("pointer-events", "none");
            $("#decoy").css("display", "none");
            $(current_piece).css("display", "block");
            promote_piece = current_piece;
            current_piece = 0;
            let pp = $("#"+current_object.color+"pp");
            if(turn==0){
                pp.css("left", $(promote_piece)[0].getBoundingClientRect().left-(parseInt($("#plate div").css("width"))*1.5));
            }else if(turn == 1){
                pp.css("left", window.innerWidth-$(promote_piece)[0].offsetLeft-$(promote_piece)[0].offsetWidth-(parseInt($(pp).css("width"))));
            };
            pp.css("display", "flex");
        }else{
        if(turn == 0){turn = 1}else if(turn == 1){turn = 0};
        turns();
        Array.prototype.forEach.call($("#chess_mov a"), function(item){    
        let object = eval($(item).attr("id"));
        if(object.piece!="king"){
        object.go = moves(object);
        object.kill = danger(object);
        };
    });
        bp9.kill = danger(bp9);
        wp9.kill = danger(wp9);
        bp9.kill = danger(bp9);
        bp9.go = moves(bp9);
        wp9.go = moves(wp9);
        bp9.go = moves(bp9);
    };
    };

    /**
     * function calculates possible moves
     * @param {object} piece - javascript object that name is an equivalent of currently checked piece id
     * @returns - array of possible moves 
     */
    function moves(piece){
        var moves = 0;
        var active = piece.active;
        if(active=="block"){
        var other_pieces_area = 0;
        other_pieces_area = [];
        Array.prototype.forEach.call($("#chess_mov a"), function(item){
            let object = eval($(item).attr("id"));
            if(object !== piece && object.active=="block"){other_pieces_area.push($(item).css("grid-area").substring(0, 5))};
        });
        var name = piece.piece;
        var color = piece.color;
        var row = piece.row;
        var col = piece.col;
        var moved = piece.moved;
        if(name == "pawn"){
            if(color=="w"){
                if(moved==0){
                    let mov1 = row-1+" / "+col;
                    let mov2 = row-2+" / "+col;
                    let test_moves = [];
                    if(other_pieces_area.indexOf(mov1)==-1){
                        test_moves.push(mov1);
                    };
                    if(other_pieces_area.indexOf(mov2)==-1 && other_pieces_area.indexOf(mov1)==-1){
                        test_moves.push(mov2);
                    };
                    if(test_moves.length!=0){
                        moves = test_moves;
                    };
                }else{
                    let mov1 = row-1+" / "+col;
                    let test_moves = [];
                    if(other_pieces_area.indexOf(mov1)==-1){
                        test_moves.push(mov1);
                    };
                    if(test_moves.length!=0){
                        moves = test_moves;
                    };    
                };
            }else if(color == "b"){
                if(moved==0){
                    let mov1 = row+1+" / "+col;
                    let mov2 = row+2+" / "+col;
                    let test_moves = [];
                    if(other_pieces_area.indexOf(mov1)==-1){
                        test_moves.push(mov1);
                    };
                    if(other_pieces_area.indexOf(mov2)==-1 && other_pieces_area.indexOf(mov1)==-1){
                        test_moves.push(mov2);
                    };
                    if(test_moves.length!=0){
                        moves = test_moves;
                    };                      
                }else{
                    let mov1 = row+1+" / "+col;
                    let test_moves = [];
                    if(other_pieces_area.indexOf(mov1)==-1){
                        test_moves.push(mov1);
                    };
                    if(test_moves.length!=0){
                        moves = test_moves;
                    };
                };
            };
        }else if(name == "bishop"){
            let confirmed_moves = [];
            let limit = 1;
            let stop1 = 0;
            let stop2 = 0;
            let stop3 = 0;
            let stop4 = 0;
            while(stop1 != 1 || stop2 != 1 || stop3 != 1 || stop4 != 1){
                let mov_test;
                if(stop1!=1){
                    mov_test = (row+limit)+" / "+(col+limit);
                    if(other_pieces_area.indexOf(mov_test)==-1 && row+limit <= 8 && col+limit <= 8){
                        confirmed_moves.push(mov_test);
                    }else{
                        stop1 = 1;
                    };
                };
                if(stop2!=1){
                    mov_test = (row+limit)+" / "+(col-limit);
                    if(other_pieces_area.indexOf(mov_test)==-1 && row+limit <= 8 && col-limit >= 1){
                        confirmed_moves.push(mov_test);
                    }else{
                        stop2 = 1;
                    };
                };
                if(stop3!=1){
                    mov_test = (row-limit)+" / "+(col-limit);
                    if(other_pieces_area.indexOf(mov_test)==-1 && row-limit >= 1 && col-limit >= 1){
                        confirmed_moves.push(mov_test);
                    }else{
                        stop3 = 1;
                    };
                };
                if(stop4!=1){
                    mov_test = (row-limit)+" / "+(col+limit);
                    if(other_pieces_area.indexOf(mov_test)==-1 && row-limit >= 1 && col+limit <= 8){
                        confirmed_moves.push(mov_test);
                    }else{
                        stop4 = 1;
                    };
                };
                limit++;
            };
            if(confirmed_moves.length!=0){
                moves = confirmed_moves;
            };
        }else if(name == "horse"){
            let confirmed_moves = [];
            let mov;
            if(row+2<=8){
                if(col+1<=8){
                    mov = (row+2)+" / "+(col+1);
                    if(other_pieces_area.indexOf(mov)==-1){
                        confirmed_moves.push(mov);
                    };
                };
                if(col-1>=1){
                    mov = (row+2)+" / "+(col-1);
                    if(other_pieces_area.indexOf(mov)==-1){
                        confirmed_moves.push(mov);
                    };
                };
            };
            if(row-2>=1){
                if(col+1<=8){
                    mov = (row-2)+" / "+(col+1);
                    if(other_pieces_area.indexOf(mov)==-1){
                        confirmed_moves.push(mov);
                    };
                };
                if(col-1>=1){
                    mov = (row-2)+" / "+(col-1);
                    if(other_pieces_area.indexOf(mov)==-1){
                        confirmed_moves.push(mov);
                    };
                };
            };
            if(col+2<=8){
                if(row+1<=8){
                    mov = (row+1)+" / "+(col+2);
                    if(other_pieces_area.indexOf(mov)==-1){
                        confirmed_moves.push(mov);
                    };
                };
                if(row-1>=1){
                    mov = (row-1)+" / "+(col+2);
                    if(other_pieces_area.indexOf(mov)==-1){
                        confirmed_moves.push(mov);
                    };
                };
            };
            if(col-2>=1){
                if(row+1<=8){
                    mov = (row+1)+" / "+(col-2);
                    if(other_pieces_area.indexOf(mov)==-1){
                        confirmed_moves.push(mov);
                    };
                };
                if(row-1>=1){
                    mov = (row-1)+" / "+(col-2);
                    if(other_pieces_area.indexOf(mov)==-1){
                        confirmed_moves.push(mov);
                    };
                };
            };
            if(confirmed_moves.length!=0){
                moves = confirmed_moves;
            };
        }else if(name == "queen"){
            let confirmed_moves = [];
            let limit = 1;
            let stop1 = 0;
            let stop2 = 0;
            let stop3 = 0;
            let stop4 = 0;
            let stop5 = 0;
            let stop6 = 0;
            let stop7 = 0;
            let stop8 = 0;
            while(stop1 != 1 || stop2 != 1 || stop3 != 1 || stop4 != 1 || stop5 != 1 || stop6 != 1 || stop7 != 1 || stop8 != 1){
                let mov;
                if(stop1!=1){
                    mov = (row+limit)+" / "+(col+limit);
                    if(other_pieces_area.indexOf(mov)==-1 && row+limit <= 8 && col+limit <= 8){
                        confirmed_moves.push(mov);
                    }else{
                        stop1 = 1;
                    };
                };
                if(stop2!=1){
                    mov = (row+limit)+" / "+(col-limit);
                    if(other_pieces_area.indexOf(mov)==-1 && row+limit <= 8 && col-limit >= 1){
                        confirmed_moves.push(mov);
                    }else{
                        stop2 = 1;
                    };
                };
                if(stop3!=1){
                    mov = (row-limit)+" / "+(col-limit);
                    if(other_pieces_area.indexOf(mov)==-1 && row-limit >= 1 && col-limit >= 1){
                        confirmed_moves.push(mov);
                    }else{
                        stop3 = 1;
                    };
                };
                if(stop4!=1){
                    mov = (row-limit)+" / "+(col+limit);
                    if(other_pieces_area.indexOf(mov)==-1 && row-limit >= 1 && col+limit <= 8){
                        confirmed_moves.push(mov);
                    }else{
                        stop4 = 1;
                    };
                };

                if(stop5!=1){
                    if(row+limit<=8){
                        mov = (row+limit)+" / "+col;
                        if(other_pieces_area.indexOf(mov)==-1){
                            confirmed_moves.push(mov);
                        }else{
                            stop5 = 1;
                        };
                    }else{
                        stop5 = 1;
                    };
                };
                if(stop6!=1){
                    if(row-limit>=1){
                        mov = (row-limit)+" / "+col;
                        if(other_pieces_area.indexOf(mov)==-1){
                            confirmed_moves.push(mov);
                        }else{
                            stop6 = 1;
                        };
                    }else{
                        stop6 = 1;
                    };
                };
                if(stop7!=1){
                    if(col+limit<=8){
                        mov = row+" / "+(col+limit);
                        if(other_pieces_area.indexOf(mov)==-1){
                            confirmed_moves.push(mov);
                        }else{
                            stop7 = 1;
                        };
                    }else{
                        stop7 = 1;
                    };
                };
                if(stop8!=1){
                    if(col-limit>=1){
                        mov = row+" / "+(col-limit);
                        if(other_pieces_area.indexOf(mov)==-1){
                            confirmed_moves.push(mov);
                        }else{
                            stop8 = 1;
                        };
                    }else{
                        stop8 = 1;
                    };
                };
                limit++;
            };
            if(confirmed_moves.length!=0){
                moves = confirmed_moves;
            };
        }else if(name == "rook"){
            let confirmed_moves = [];
            let limit = 1;
            let stop1 = 0;
            let stop2 = 0;
            let stop3 = 0;
            let stop4 = 0;
            while(stop1 != 1 || stop2 != 1 || stop3 != 1 || stop4 != 1){
                let mov;
                if(stop1!=1){
                    if(row+limit<=8){
                        mov = (row+limit)+" / "+col;
                        if(other_pieces_area.indexOf(mov)==-1){
                            confirmed_moves.push(mov);
                        }else{
                            stop1 = 1;
                        };
                    }else{
                        stop1 = 1;
                    };
                };
                if(stop2!=1){
                    if(row-limit>=1){
                        mov = (row-limit)+" / "+col;
                        if(other_pieces_area.indexOf(mov)==-1){
                            confirmed_moves.push(mov);
                        }else{
                            stop2 = 1;
                        };
                    }else{
                        stop2 = 1;
                    };
                };
                if(stop3!=1){
                    if(col+limit<=8){
                        mov = row+" / "+(col+limit);
                        if(other_pieces_area.indexOf(mov)==-1){
                            confirmed_moves.push(mov);
                        }else{
                            stop3 = 1;
                        };
                    }else{
                        stop3 = 1;
                    };
                };
                if(stop4!=1){
                    if(col-limit>=1){
                        mov = row+" / "+(col-limit);
                        if(other_pieces_area.indexOf(mov)==-1){
                            confirmed_moves.push(mov);
                        }else{
                            stop4 = 1;
                        };
                    }else{
                        stop4 = 1;
                    };
                };
                limit++
            };
            if(confirmed_moves.length!=0){
                moves=confirmed_moves;
            };
        }else if(name == "king"){
            piece.castle = 0;
            let enemy;
            if(color=="w"){
                enemy=bp9;
            }else if(color=="b"){
                enemy=wp9;
            };
            let erow = enemy.row;
            let ecol = enemy.col;
            let enemy_danger = [(erow+1)+" / "+(ecol),(erow+1)+" / "+(ecol+1),(erow+1)+" / "+(ecol-1),(erow-1)+" / "+(ecol),(erow-1)+" / "+(ecol+1),(erow-1)+" / "+(ecol-1),(erow)+" / "+(ecol+1),(erow)+" / "+(ecol-1)];
            let other_pieces_go = [];
            Array.prototype.forEach.call($("#chess_mov a"), function(item){
                let object = eval($(item).attr("id"));
                if(object.active=="block" && object.color!=color && object.piece!="king" && object.go!==0 && object.go!=undefined && object.piece!="pawn"){
                    other_pieces_go.push(object.go);
                }else if(object.piece=="pawn" && object.color!=color && (object.row-1 >= 1 || object.row+1 <= 8) && object.active=="block"){
                    let killer_row;
                    let killer_col1;
                    let killer_col2;
                    if(color=="w"){
                        killer_row = object.row+1;
                        killer_col1 = object.col+1;
                        killer_col2 = object.col-1;
                    }else if(color=="b"){
                        killer_row = object.row-1;
                        killer_col1 = object.col+1;
                        killer_col2 = object.col-1;
                    };
                    if(killer_col1 <= 8){
                    let killer_coord1 = killer_row+" / "+killer_col1;
                    other_pieces_go.push(killer_coord1);
                    };
                    if(killer_col2 >= 1){
                    let killer_coord2 = killer_row+" / "+killer_col2;
                    other_pieces_go.push(killer_coord2);
                    };
                };
            });
            if(other_pieces_go.length!=0){
                other_pieces_go = other_pieces_go.toString();
                other_pieces_go = other_pieces_go.split(",");
                other_pieces_go = other_pieces_go.concat(other_pieces_area);
            };
            if(moved==0 && piece.check == 0){
                let rook1 = eval($("#"+color+"p15").attr("id"));
                let rook2 = eval($("#"+color+"p16").attr("id"));
                let castle_approve = 0;
                if(rook1.moved==0 && rook1.active!="none"){castle_approve = 1};
                if(rook2.moved==0 && rook2.active!="none"){castle_approve = 1};
                if(castle_approve==1){
                    let cas = [];
                    let coord_spr;
                    if(rook1.moved==0 && rook1.active!="none"){
                      coord_spr = [row+" / 2", row+" / 3", row+" / 4"];
                      for(let i = 0; i < coord_spr.length; i++){
                        let c_spr = coord_spr[i];
                        if(other_pieces_go.indexOf(c_spr)!=-1){
                            castle_approve = 0;
                            break;
                        };

                      };
                      if(castle_approve == 1){
                            cas.push([row+" / 3", row+" / 4", $("#"+color+"p15")]);
                        }; 
                    };
                    castle_approve = 1;
                    if(rook2.moved==0 && rook2.active!="none"){
                        coord_spr = [row+" / 6", row+" / 7"];
                        for(let i = 0; i < coord_spr.length; i++){
                          let c_spr = coord_spr[i];
                          if(other_pieces_go.indexOf(c_spr)!=-1){
                              castle_approve = 0;
                              break;
                          };
                        };
                        if(castle_approve == 1){
                              cas.push([row+" / 7", row+" / 6", $("#"+color+"p16")]);
                          }; 
                    };
                    if(cas.length!=0){
                        piece.castle = cas;
                    };
                };
            };
            let mov = [];
            let mov_all = [(row+1)+" / "+(col+1),(row+1)+" / "+(col-1),(row+1)+" / "+(col),(row-1)+" / "+(col+1),(row-1)+" / "+(col-1),(row-1)+" / "+(col),(row)+" / "+(col+1),(row)+" / "+(col-1)];
            for(let i = 0; i < mov_all.length; i++){
                let spr_row = mov_all[i].charAt(0)*1;
                let spr_col = mov_all[i].charAt(4)*1;
                if(spr_row <= 8 && spr_row >= 1 && spr_col <= 8 && spr_col >= 1){
                if(other_pieces_go.length!=0){
                if(other_pieces_go.indexOf(mov_all[i])==-1){
                    mov.push(mov_all[i]);
                }}else{
                if(other_pieces_area.indexOf(mov_all[i])==-1){
                    mov.push(mov_all[i]);
                }};
            };
            };
            if(mov.length!=0){
             for(let i = 0; i < mov.length; i++){   
                if(enemy_danger.indexOf(mov[i])!=-1){
                    mov.splice(i, 1);
                    i = i-1;
                };
                }};
            if(mov.length!=0){
                moves = mov;
            };
        };
    };
        return moves;
    };


    /**
     * function calculates wchich pieces can be killed by 'piece'
     * @param {object} piece - javascript object that name is an equivalent of currently checked piece id
     * @returns - 2d array [[string - coord that 'piece' need to go to kill piece] [piece that will be killed]]
     */
    function danger(piece){
    piece.protect = 0;
    piece.protect = [];
    var execution = 0;
    var active = piece.active;
    if(active=="block"){
     var name = piece.piece;
     var color = piece.color;
     var row = piece.row;
     var col = piece.col;
     var other_pieces_area = [];
     var other_pieces = [];
     var all_pieces = [];
     var all_pieces_area = [];
     var own_pieces_area = [];
     var own_pieces = [];
     Array.prototype.forEach.call($("#chess_mov a"), function(item){
         let object = eval($(item).attr("id"));
         if(object !== piece && object.active=="block"){
                all_pieces.push(item);
                all_pieces_area.push($(item).css("grid-area").substring(0, 5));
            if(object.color!=color){
                other_pieces_area.push($(item).css("grid-area").substring(0, 5));
                other_pieces.push(item);  
            }else if(object.color==color){
                own_pieces_area.push($(item).css("grid-area").substring(0, 5));
                own_pieces.push(item);
            };
        };
     });   
    if(name == "pawn"){
        if(color == "w"){
            var killing_row = row-1;
            var killing_col1 = col-1;
            var killing_col2 = col+1;
            var kill1 = killing_row+" / "+killing_col1;
            var kill2 = killing_row+" / "+killing_col2;
            var ep_left = row+" / "+(col-1);
            var ep_right = row+" / "+(col+1);
            var kill_test = [];
            if(other_pieces_area.indexOf(kill1)!=-1){
                kill_test.push([kill1, other_pieces[other_pieces_area.indexOf(kill1)]]);
            }else if(own_pieces_area.indexOf(kill1)!=-1){
                piece.protect.push(own_pieces[own_pieces_area.indexOf(kill1)]);
            };

            if(other_pieces_area.indexOf(kill2)!=-1){
                kill_test.push([kill2, other_pieces[other_pieces_area.indexOf(kill2)]]);
            }else if(own_pieces_area.indexOf(kill2)!=-1){
                piece.protect.push(own_pieces[own_pieces_area.indexOf(kill2)]);
            };

            if(other_pieces_area.indexOf(ep_left)!=-1 && $(other_pieces[other_pieces_area.indexOf(ep_left)]).attr("class")=="ep"){
                kill_test.push([killing_row+" / "+killing_col1, other_pieces[other_pieces_area.indexOf(ep_left)]]);
            };

            if(other_pieces_area.indexOf(ep_right)!=-1 && $(other_pieces[other_pieces_area.indexOf(ep_right)]).attr("class")=="ep"){
                kill_test.push([killing_row+" / "+killing_col2, other_pieces[other_pieces_area.indexOf(ep_right)]]);
            };

            if(kill_test.length!=0){execution = kill_test};

        }else if(color == "b"){
            var killing_row = row+1;
            var killing_col1 = col-1;
            var killing_col2 = col+1;
            var kill1 = killing_row+" / "+killing_col1;
            var kill2 = killing_row+" / "+killing_col2;
            var ep_left = row+" / "+(col-1);
            var ep_right = row+" / "+(col+1);
            var kill_test = [];
            if(other_pieces_area.indexOf(kill1)!=-1){
                kill_test.push([kill1, other_pieces[other_pieces_area.indexOf(kill1)]]);
            }else if(own_pieces_area.indexOf(kill1)!=-1){
                piece.protect.push(own_pieces[own_pieces_area.indexOf(kill1)]);
            };

            if(other_pieces_area.indexOf(kill2)!=-1){
                kill_test.push([kill2, other_pieces[other_pieces_area.indexOf(kill2)]]);
            }else if(own_pieces_area.indexOf(kill2)!=-1){
                piece.protect.push(own_pieces[own_pieces_area.indexOf(kill2)]);
            };

            if(other_pieces_area.indexOf(ep_left)!=-1 && $(other_pieces[other_pieces_area.indexOf(ep_left)]).attr("class")=="ep"){
                kill_test.push([killing_row+" / "+killing_col1, other_pieces[other_pieces_area.indexOf(ep_left)]]);
            };

            if(other_pieces_area.indexOf(ep_right)!=-1 && $(other_pieces[other_pieces_area.indexOf(ep_right)]).attr("class")=="ep"){
                kill_test.push([killing_row+" / "+killing_col2, other_pieces[other_pieces_area.indexOf(ep_right)]]);
            };

            if(kill_test.length!=0){execution = kill_test};
        };
    }else if(name == "bishop"){
        let kills = [];
        let limit = 1;
        let stop1 = 0;
        let stop2 = 0;
        let stop3 = 0;
        let stop4 = 0;
        while(stop1 != 1 || stop2 != 1 || stop3 != 1 || stop4 != 1){
            let kill_test;
            if(stop1!=1){
                if(row+limit <= 8 && col+limit <= 8){
                  kill_test = (row+limit)+" / "+(col+limit);
                  if(all_pieces_area.indexOf(kill_test)!=-1){
                    if(other_pieces_area.indexOf(kill_test)!=-1){
                    kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                    }else if(own_pieces_area.indexOf(kill_test)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                    };
                    stop1 = 1
                  };
                }else{
                    stop1 = 1;
                };   
            };
            if(stop2!=1){
                if(row+limit <= 8 && col-limit >= 1){
                  kill_test = (row+limit)+" / "+(col-limit);
                  if(all_pieces_area.indexOf(kill_test)!=-1){
                    if(other_pieces_area.indexOf(kill_test)!=-1){
                    kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                    }else if(own_pieces_area.indexOf(kill_test)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                    };
                    stop2 = 1
                  }; 
                }else{
                    stop2 = 1;
                };       
            };
            if(stop3!=1){
                if(row-limit >= 1 && col-limit >= 1){
                   kill_test = (row-limit)+" / "+(col-limit);
                   if(all_pieces_area.indexOf(kill_test)!=-1){
                    if(other_pieces_area.indexOf(kill_test)!=-1){
                    kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                    }else if(own_pieces_area.indexOf(kill_test)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                    };
                    stop3 = 1
                  };
                }else{
                    stop3 = 1;
                };     
            };
            if(stop4!=1){
                if(row-limit >= 1 && col+limit <= 8){
                  kill_test = (row-limit)+" / "+(col+limit); 
                  if(all_pieces_area.indexOf(kill_test)!=-1){
                    if(other_pieces_area.indexOf(kill_test)!=-1){
                    kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                    }else if(own_pieces_area.indexOf(kill_test)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                    };
                    stop4 = 1
                  };
                }else{
                    stop4 = 1;
                }; 
            };
            limit++;
        };
        if(kills.length!=0){
            execution = kills;
        };
    }else if(name == "horse"){
        let confirmed_kills = [];
            let mov;
            if(row+2<=8){
                if(col+1<=8){
                    mov = (row+2)+" / "+(col+1);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        confirmed_kills.push([mov, other_pieces[other_pieces_area.indexOf(mov)]]);
                    }else if(own_pieces_area.indexOf(mov)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(mov)]);
                    };
                };
                if(col-1>=1){
                    mov = (row+2)+" / "+(col-1);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        confirmed_kills.push([mov, other_pieces[other_pieces_area.indexOf(mov)]]);
                    }else if(own_pieces_area.indexOf(mov)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(mov)]);
                    };
                };
            };
            if(row-2>=1){
                if(col+1<=8){
                    mov = (row-2)+" / "+(col+1);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        confirmed_kills.push([mov, other_pieces[other_pieces_area.indexOf(mov)]]);
                    }else if(own_pieces_area.indexOf(mov)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(mov)]);
                    };
                };
                if(col-1>=1){
                    mov = (row-2)+" / "+(col-1);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        confirmed_kills.push([mov, other_pieces[other_pieces_area.indexOf(mov)]]);
                    }else if(own_pieces_area.indexOf(mov)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(mov)]);
                    };
                };
            };
            if(col+2<=8){
                if(row+1<=8){
                    mov = (row+1)+" / "+(col+2);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        confirmed_kills.push([mov, other_pieces[other_pieces_area.indexOf(mov)]]);
                    }else if(own_pieces_area.indexOf(mov)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(mov)]);
                    };
                };
                if(row-1>=1){
                    mov = (row-1)+" / "+(col+2);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        confirmed_kills.push([mov, other_pieces[other_pieces_area.indexOf(mov)]]);
                    }else if(own_pieces_area.indexOf(mov)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(mov)]);
                    };
                };
            };
            if(col-2>=1){
                if(row+1<=8){
                    mov = (row+1)+" / "+(col-2);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        confirmed_kills.push([mov, other_pieces[other_pieces_area.indexOf(mov)]]);
                    }else if(own_pieces_area.indexOf(mov)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(mov)]);
                    };
                };
                if(row-1>=1){
                    mov = (row-1)+" / "+(col-2);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        confirmed_kills.push([mov, other_pieces[other_pieces_area.indexOf(mov)]]);
                    }else if(own_pieces_area.indexOf(mov)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(mov)]);
                    };
                };
            };
            if(confirmed_kills.length!=0){
                execution = confirmed_kills;
            };
    }else if(name == "queen"){
        let kills = [];
        let limit = 1;
        let stop1 = 0;
        let stop2 = 0;
        let stop3 = 0;
        let stop4 = 0;
        let stop5 = 0;
        let stop6 = 0;
        let stop7 = 0;
        let stop8 = 0;
        while(stop1 != 1 || stop2 != 1 || stop3 != 1 || stop4 != 1 || stop5 != 1 || stop6 != 1 || stop7 != 1 || stop8 != 1){
            let kill_test;
            if(stop1!=1){
                if(row+limit <= 8 && col+limit <= 8){
                  kill_test = (row+limit)+" / "+(col+limit);
                  if(all_pieces_area.indexOf(kill_test)!=-1){
                    if(other_pieces_area.indexOf(kill_test)!=-1){
                    kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                    }else if(own_pieces_area.indexOf(kill_test)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                    };
                    stop1 = 1
                  };
                }else{
                    stop1 = 1;
                };   
            };
            if(stop2!=1){
                if(row+limit <= 8 && col-limit >= 1){
                  kill_test = (row+limit)+" / "+(col-limit);
                  if(all_pieces_area.indexOf(kill_test)!=-1){
                    if(other_pieces_area.indexOf(kill_test)!=-1){
                    kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                    }else if(own_pieces_area.indexOf(kill_test)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                    };
                    stop2 = 1
                  }; 
                }else{
                    stop2 = 1;
                };       
            };
            if(stop3!=1){
                if(row-limit >= 1 && col-limit >= 1){
                   kill_test = (row-limit)+" / "+(col-limit);
                   if(all_pieces_area.indexOf(kill_test)!=-1){
                    if(other_pieces_area.indexOf(kill_test)!=-1){
                    kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                    }else if(own_pieces_area.indexOf(kill_test)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                    };
                    stop3 = 1
                  };
                }else{
                    stop3 = 1;
                };     
            };
            if(stop4!=1){
                if(row-limit >= 1 && col+limit <= 8){
                  kill_test = (row-limit)+" / "+(col+limit); 
                  if(all_pieces_area.indexOf(kill_test)!=-1){
                    if(other_pieces_area.indexOf(kill_test)!=-1){
                    kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                    }else if(own_pieces_area.indexOf(kill_test)!=-1){
                        piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                    };
                    stop4 = 1
                  };
                }else{
                    stop4 = 1;
                }; 
            };
            if(stop5!=1){
                if(col+limit<=8){
                    kill_test = row+" / "+(col+limit);
                    if(all_pieces_area.indexOf(kill_test)!=-1){
                        stop5 = 1;
                        if(other_pieces_area.indexOf(kill_test)!=-1){
                            kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                        }else if(own_pieces_area.indexOf(kill_test)!=-1){
                            piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                        };
                    };
                }else{stop5 = 1};
            };
            if(stop6!=1){
                if(col-limit>=1){
                    kill_test = row+" / "+(col-limit);
                    if(all_pieces_area.indexOf(kill_test)!=-1){
                        stop6 = 1;
                        if(other_pieces_area.indexOf(kill_test)!=-1){
                            kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                        }else if(own_pieces_area.indexOf(kill_test)!=-1){
                            piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                        };
                    };
                }else{stop6=1};
            };
            if(stop7!=1){
                if(row+limit<=8){
                    kill_test = (row+limit)+" / "+col;
                    if(all_pieces_area.indexOf(kill_test)!=-1){
                        stop7 = 1;
                        if(other_pieces_area.indexOf(kill_test)!=-1){
                            kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                        }else if(own_pieces_area.indexOf(kill_test)!=-1){
                            piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                        };
                    };
                }else{stop7=1};
            };
            if(stop8!=1){
                if(row-limit>=1){
                    kill_test = (row-limit)+" / "+col;
                    if(all_pieces_area.indexOf(kill_test)!=-1){
                        stop8 = 1;
                        if(other_pieces_area.indexOf(kill_test)!=-1){
                            kills.push([kill_test, other_pieces[other_pieces_area.indexOf(kill_test)]]);
                        }else if(own_pieces_area.indexOf(kill_test)!=-1){
                            piece.protect.push(own_pieces[own_pieces_area.indexOf(kill_test)]);
                        };
                    };
                }else{stop8=1};
            };
            limit++;
        };
        if(kills.length!=0){
            execution = kills;
        };
    }else if(name == "rook"){
        let kills = [];
        let limit = 1;
        let stop1 = 0;
        let stop2 = 0;
        let stop3 = 0;
        let stop4 = 0;
        while(stop1 != 1 || stop2 != 1 || stop3 != 1 || stop4 != 1){
            let kill;
            if(stop1!=1){
                if(col+limit<=8){
                    kill = row+" / "+(col+limit);
                    if(all_pieces_area.indexOf(kill)!=-1){
                        stop1 = 1;
                        if(other_pieces_area.indexOf(kill)!=-1){
                            kills.push([kill, other_pieces[other_pieces_area.indexOf(kill)]]);
                        }else if(own_pieces_area.indexOf(kill)!=-1){
                            piece.protect.push(own_pieces[own_pieces_area.indexOf(kill)]);
                        };
                    };
                }else{stop1 = 1};
            };
            if(stop2!=1){
                if(col-limit>=1){
                    kill = row+" / "+(col-limit);
                    if(all_pieces_area.indexOf(kill)!=-1){
                        stop2 = 1;
                        if(other_pieces_area.indexOf(kill)!=-1){
                            kills.push([kill, other_pieces[other_pieces_area.indexOf(kill)]]);
                        }else if(own_pieces_area.indexOf(kill)!=-1){
                            piece.protect.push(own_pieces[own_pieces_area.indexOf(kill)]);
                        };
                    };
                }else{stop2=1};
            };
            if(stop3!=1){
                if(row+limit<=8){
                    kill = (row+limit)+" / "+col;
                    if(all_pieces_area.indexOf(kill)!=-1){
                        stop3 = 1;
                        if(other_pieces_area.indexOf(kill)!=-1){
                            kills.push([kill, other_pieces[other_pieces_area.indexOf(kill)]]);
                        }else if(own_pieces_area.indexOf(kill)!=-1){
                            piece.protect.push(own_pieces[own_pieces_area.indexOf(kill)]);
                        };
                    };
                }else{stop3=1};
            };
            if(stop4!=1){
                if(row-limit>=1){
                    kill = (row-limit)+" / "+col;
                    if(all_pieces_area.indexOf(kill)!=-1){
                        stop4 = 1;
                        if(other_pieces_area.indexOf(kill)!=-1){
                            kills.push([kill, other_pieces[other_pieces_area.indexOf(kill)]]);
                        }else if(own_pieces_area.indexOf(kill)!=-1){
                            piece.protect.push(own_pieces[own_pieces_area.indexOf(kill)]);
                        };
                    };
                }else{stop4=1};
            };
            limit++;
        };
        if(kills.length!=0){
            execution = kills;
        };
    }else if(name == "king"){
       let kills = [];
       let kill_test = [(row-1)+" / "+(col), (row-1)+" / "+(col+1), (row-1)+" / "+(col-1), (row+1)+" / "+(col), (row+1)+" / "+(col+1), (row+1)+" / "+(col-1), (row)+" / "+(col+1), (row)+" / "+(col-1)];
       let protect_test = [];
       Array.prototype.forEach.call(all_pieces_area, function(coord){
        if(kill_test.indexOf(coord)!=-1 && other_pieces_area.indexOf(coord)!=-1){
            let inx = other_pieces_area.indexOf(coord);
            protect_test.push(other_pieces[inx]);
        }else if(kill_test.indexOf(coord)!=-1 && own_pieces_area.indexOf(coord)!=-1){
            let testcolor = piece.color;
            piece.protect.push(own_pieces[own_pieces_area.indexOf(coord)]);
        };
       });
       if(protect_test.length!=0){
        let other_pieces_protect = [];
        Array.prototype.forEach.call(other_pieces, function(enemy){
            let obj = eval($(enemy).attr("id"));
            if(obj.active=="block"){
            for(let i = 0; i < obj.protect.length; i++){
                other_pieces_protect.push(obj.protect[i]);
            }};
        });
        for(let i = 0; i < protect_test.length; i++){
            if(other_pieces_protect.indexOf(protect_test[i])!=-1){
                protect_test.splice(i,1);
                i = i-1;
            };
        };
        Array.prototype.forEach.call(protect_test, function(enemy){
            let killed = eval($(enemy).attr("id"));
            kills.push([killed.coord, $(enemy)]);
        }); 
       };
       if(kills.length!=0){
        execution = kills;
       };
    };
    };
    if(execution!=0){
        for(let i = 0; i < execution.length; i++){
            let who = eval($(execution[i][1]).attr("id"));
            if(who.piece=="king"){
                execution.splice(i,1);
                who.check=1;
            };
        };
    };
    return execution;
    };

    /**
     * function rotates chess plate
     */
    function turns(){
        if(turn==0){
            $("#pola").css("rotate", "0deg");
            $("a[id^='b']").css("pointer-events", "none");
            $("a[id^='w']").css("pointer-events", "auto");
            $("#chess_mov *").css("rotate", "0deg");
            $("#pola h1").css("rotate", "0deg");
        }else if(turn==1){
            $("#pola").css("rotate", "180deg");
            $("a[id^='w']").css("pointer-events", "none");
            $("a[id^='b']").css("pointer-events", "auto");
            $("#chess_mov *").css("rotate", "180deg");
            $("#pola h1").css("rotate", "180deg");
        };
    };

    /**
     * function calculates which plate is under mouse
     * @param {number} x - x of mouse
     * @param {number} y - y of mouse
     * @returns - plate that is under mouse
     */
    function plate(x, y){
        var current_plate = $("#plate *").map(function(){
            var cl = $(this).offset().left;
            var ct = $(this).offset().top;
            var ch = $(this).height();
            var cw = $(this).width();
            var maxx = cl + cw;
            var maxy = ct + ch;
            return (y <= maxy && y >= ct) && (x <= maxx && x >= cl) ? $(this) : null; 
        });
        if(turn==0){
        return current_plate[current_plate.length-1];
        }else if(turn==1){
        return current_plate[0];
        };
    };

    $("input[name='w_promote']").click(function(radio){
        /**
         * function handle white pieces promotions
         */
        let who = radio.target.value;
        $("#wpp").css("display", "none");
        let obj = eval($(promote_piece).attr("id"));
        obj.piece = who;
        assign(promote_piece);
        if(turn == 0){turn = 1}else if(turn == 1){turn = 0};
        turns();
        Array.prototype.forEach.call($("#chess_mov a"), function(item){    
            let object = eval($(item).attr("id"));
            if(object.piece!="king"){
            object.go = moves(object);
            object.kill = danger(object);
            };
        });
            bp9.kill = danger(bp9);
            wp9.kill = danger(wp9);
            bp9.kill = danger(bp9);
            bp9.go = moves(bp9);
            wp9.go = moves(wp9);
            bp9.go = moves(bp9);
        promote_piece = 0;
        promote = 0;
        end_game(bp9);
        material();
        stealmate_rep();
        move_count++;
    });

    $("input[name='b_promote']").click(function(radio){
        /**
         * function handle black pieces promotions
         */
        let who = radio.target.value;
        $("#bpp").css("display", "none");
        let obj = eval($(promote_piece).attr("id"));
        obj.piece = who;
        assign(promote_piece);
        if(turn == 0){turn = 1}else if(turn == 1){turn = 0};
        turns();
        Array.prototype.forEach.call($("#chess_mov a"), function(item){    
            let object = eval($(item).attr("id"));
            if(object.piece!="king"){
            object.go = moves(object);
            object.kill = danger(object);
            };
        });
            bp9.kill = danger(bp9);
            wp9.kill = danger(wp9);
            bp9.kill = danger(bp9);
            bp9.go = moves(bp9);
            wp9.go = moves(wp9);
            bp9.go = moves(bp9);
        promote_piece = 0;
        promote = 0;
        end_game(wp9);
        material();
        stealmate_rep();
        move_count++;
    });

    /**
     * function warns player that there is a check
     * @param {object} plate - html object - plate that warned king is staying on 
     */
    function warning(plate){
        let color = $(plate).attr('class').substring(0, 5);
        if(warnded==1||warnded==3||warnded==5){
            $(plate).attr("class", color+"_warning");
            warnded++;
            setTimeout(function(){warning(plate)}, 100);
        }else if(warnded==2||warnded==4){
            $(plate).attr("class", color); 
            warnded++;
            setTimeout(function(){warning(plate)}, 100);
        }else if(warnded==6){
            warnded=1;
            $(plate).attr("class", color);
        };
    };

    /**
     * function calculates which pieces are pinned and what are consequences of it
     * @param {object} obj - javascript object that name is an equivalent of currently checked piece id 
     */
    function pin(obj){
        let name = obj.piece;
        let color = obj.color;
        let row = obj.row;
        let col = obj.col;
        let other_pieces_area = [];
        let other_pieces = [];
        Array.prototype.forEach.call($("#chess_mov a"), function(item){
            let object = eval($(item).attr("id"));
            if(object !== obj && object.active=="block"){
                other_pieces_area.push($(item).css("grid-area").substring(0, 5));
                other_pieces.push($(item).attr("id"));
            };
        });
        if(name=="rook"){
            let in_path1 = [];
            let in_path2 = [];
            let in_path3 = [];
            let in_path4 = [];
            let limit = 1;
            let stop1 = 0;
            let stop2 = 0;
            let stop3 = 0;
            let stop4 = 0;
            let mid_stop1 = 0;
            let mid_stop2 = 0;
            let mid_stop3 = 0;
            let mid_stop4 = 0;
            let go_path1 = [];
            let go_path2 = [];
            let go_path3 = [];
            let go_path4 = [];
            while(stop1 != 1 || stop2 != 1 || stop3 != 1 || stop4 != 1){
                let mov;
                if(stop1!=1){
                    if(row+limit<=8){
                        mov = (row+limit)+" / "+col;
                        if(other_pieces_area.indexOf(mov)!=-1){
                            in_path1.push(other_pieces[other_pieces_area.indexOf(mov)]);
                            mid_stop1 = 1;
                        }else if(mid_stop1!=1){
                            go_path1.push(mov);
                        };
                    }else{
                        stop1 = 1;
                    };
                };
                if(stop2!=1){
                    if(row-limit>=1){
                        mov = (row-limit)+" / "+col;
                        if(other_pieces_area.indexOf(mov)!=-1){
                            in_path2.push(other_pieces[other_pieces_area.indexOf(mov)]);
                            mid_stop2 = 1;
                        }else if(mid_stop2!=1){
                            go_path2.push(mov);
                        };
                    }else{
                        stop2 = 1;
                    };
                };
                if(stop3!=1){
                    if(col+limit<=8){
                        mov = row+" / "+(col+limit);
                        if(other_pieces_area.indexOf(mov)!=-1){
                            in_path3.push(other_pieces[other_pieces_area.indexOf(mov)]);
                            mid_stop3 = 1;
                        }else if(mid_stop3!=1){
                            go_path3.push(mov);
                        };
                    }else{
                        stop3 = 1;
                    };
                };
                if(stop4!=1){
                    if(col-limit>=1){
                        mov = row+" / "+(col-limit);
                        if(other_pieces_area.indexOf(mov)!=-1){
                            in_path4.push(other_pieces[other_pieces_area.indexOf(mov)]);
                            mid_stop4 = 1;
                        }else if(mid_stop4!=1){
                            go_path4.push(mov);
                        };
                    }else{
                        stop4 = 1;
                    };
                };
                limit++
            };
            let pinned = 0;
            if(in_path1.length>=2){
                if(eval(in_path1[1]).piece=="king" && eval(in_path1[0]).color != color && eval(in_path1[1]).color != color){
                    pinned = [go_path1 ,eval(in_path1[0])];
                };
            };
            if(in_path2.length>=2){
                if(eval(in_path2[1]).piece=="king" && eval(in_path2[0]).color != color && eval(in_path2[1]).color != color){
                    pinned = [go_path2, eval(in_path2[0])];
                };
            };
            if(in_path3.length>=2){
                if(eval(in_path3[1]).piece=="king" && eval(in_path3[0]).color != color && eval(in_path3[1]).color != color){
                    pinned = [go_path3 ,eval(in_path3[0])];
                };
            };
            if(in_path4.length>=2){
                if(eval(in_path4[1]).piece=="king" && eval(in_path4[0]).color != color && eval(in_path4[1]).color != color){
                    pinned = [go_path4, eval(in_path4[0])];
                };
            };
            if(pinned!==0){
                if(pinned[1].go!==0){
                for(let i = 0; i < pinned[1].go.length; i++){
                    if(pinned[0].indexOf(pinned[1].go[i])==-1){
                        pinned[1].go.splice(i,1);
                        i--;
                    };
                    if(pinned[1].go.length==0){
                        pinned[1].go = 0;
                    };
                }};
                if(pinned[1].kill!==0){
                for(let i = 0; i < pinned[1].kill.length; i++){
                    let spr = eval($(pinned[1].kill[i][1]).attr("id"));
                    if(spr!==obj){
                        pinned[1].kill.splice(i,1);
                        i--;
                    };
                    if(pinned[1].kill.length==0){
                        pinned[1].kill = 0;
                    };
                }};
            };
        }else if(name=="bishop"){
            let in_path1 = [];
            let in_path2 = [];
            let in_path3 = [];
            let in_path4 = [];
            let limit = 1;
            let stop1 = 0;
            let stop2 = 0;
            let stop3 = 0;
            let stop4 = 0;
            let mid_stop1 = 0;
            let mid_stop2 = 0;
            let mid_stop3 = 0;
            let mid_stop4 = 0;
            let go_path1 = [];
            let go_path2 = [];
            let go_path3 = [];
            let go_path4 = [];
            while(stop1 != 1 || stop2 != 1 || stop3 != 1 || stop4 != 1){
                let mov;
                if(stop1!=1){
                    if(row+limit <= 8 && col+limit <= 8){
                        mov = (row+limit)+" / "+(col+limit);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        in_path1.push(other_pieces[other_pieces_area.indexOf(mov)]);
                        mid_stop1 = 1;
                    }else if(mid_stop1 != 1){
                        go_path1.push(mov);
                    };
                    }else{
                        stop1=1;
                    };
                };
                if(stop2!=1){
                    if(row+limit <= 8 && col-limit >= 1){
                        mov = (row+limit)+" / "+(col-limit);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        in_path2.push(other_pieces[other_pieces_area.indexOf(mov)]);
                        mid_stop2 = 1;
                    }else if(mid_stop2 != 1){
                        go_path2.push(mov);
                    };
                    }else{
                        stop2=1;
                    };
                };
                if(stop3!=1){
                    if(row-limit >= 1 && col-limit >= 1){
                        mov = (row-limit)+" / "+(col-limit);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        in_path3.push(other_pieces[other_pieces_area.indexOf(mov)]);
                        mid_stop3 = 1;
                    }else if(mid_stop3 != 1){
                        go_path3.push(mov);
                    };
                    }else{
                        stop3=1;
                    };
                };
                if(stop4!=1){
                    if(row-limit >= 1 && col+limit <= 8){
                        mov = (row-limit)+" / "+(col+limit);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        in_path4.push(other_pieces[other_pieces_area.indexOf(mov)]);
                        mid_stop4 = 1;
                    }else if(mid_stop4 != 1){
                        go_path4.push(mov);
                    };
                    }else{
                        stop4=1;
                    };
                };
                limit++;
            };
            let pinned = 0;
            if(in_path1.length>=2){
                if(eval(in_path1[1]).piece=="king" && eval(in_path1[0]).color != color && eval(in_path1[1]).color != color){
                    pinned = [go_path1 ,eval(in_path1[0])];
                };
            };
            if(in_path2.length>=2){
                if(eval(in_path2[1]).piece=="king" && eval(in_path2[0]).color != color && eval(in_path2[1]).color != color){
                    pinned = [go_path2, eval(in_path2[0])];
                };
            };
            if(in_path3.length>=2){
                if(eval(in_path3[1]).piece=="king" && eval(in_path3[0]).color != color && eval(in_path3[1]).color != color){
                    pinned = [go_path3 ,eval(in_path3[0])];
                };
            };
            if(in_path4.length>=2){
                if(eval(in_path4[1]).piece=="king" && eval(in_path4[0]).color != color && eval(in_path4[1]).color != color){
                    pinned = [go_path4, eval(in_path4[0])];
                };
            };
            if(pinned!==0){
                if(pinned[1].go!==0){
                for(let i = 0; i < pinned[1].go.length; i++){
                    if(pinned[0].indexOf(pinned[1].go[i])==-1){
                        pinned[1].go.splice(i,1);
                        i--;
                    };
                    if(pinned[1].go.length==0){
                        pinned[1].go = 0;
                    };
                }};
                if(pinned[1].kill!==0){
                for(let i = 0; i < pinned[1].kill.length; i++){
                    let spr = eval($(pinned[1].kill[i][1]).attr("id"));
                    if(spr!==obj){
                        pinned[1].kill.splice(i,1);
                        i--;
                    };
                    if(pinned[1].kill.length==0){
                        pinned[1].kill = 0;
                    };
                }};
            }; 
        }else if(name=="queen"){
            let in_path1 = [];
            let in_path2 = [];
            let in_path3 = [];
            let in_path4 = [];
            let in_path5 = [];
            let in_path6 = [];
            let in_path7 = [];
            let in_path8 = [];
            let limit = 1;
            let stop1 = 0;
            let stop2 = 0;
            let stop3 = 0;
            let stop4 = 0;
            let stop5 = 0;
            let stop6 = 0;
            let stop7 = 0;
            let stop8 = 0;
            let mid_stop1 = 0;
            let mid_stop2 = 0;
            let mid_stop3 = 0;
            let mid_stop4 = 0;
            let mid_stop5 = 0;
            let mid_stop6 = 0;
            let mid_stop7 = 0;
            let mid_stop8 = 0;
            let go_path1 = [];
            let go_path2 = [];
            let go_path3 = [];
            let go_path4 = [];
            let go_path5 = [];
            let go_path6 = [];
            let go_path7 = [];
            let go_path8 = [];
            while(stop1 != 1 || stop2 != 1 || stop3 != 1 || stop4 != 1 || stop5 != 1 || stop6 != 1 || stop7 != 1 || stop8 != 1){
                let mov;
                if(stop1!=1){
                    if(row+limit<=8){
                        mov = (row+limit)+" / "+col;
                        if(other_pieces_area.indexOf(mov)!=-1){
                            in_path1.push(other_pieces[other_pieces_area.indexOf(mov)]);
                            mid_stop1 = 1;
                        }else if(mid_stop1!=1){
                            go_path1.push(mov);
                        };
                    }else{
                        stop1 = 1;
                    };
                };
                if(stop2!=1){
                    if(row-limit>=1){
                        mov = (row-limit)+" / "+col;
                        if(other_pieces_area.indexOf(mov)!=-1){
                            in_path2.push(other_pieces[other_pieces_area.indexOf(mov)]);
                            mid_stop2 = 1;
                        }else if(mid_stop2!=1){
                            go_path2.push(mov);
                        };
                    }else{
                        stop2 = 1;
                    };
                };
                if(stop3!=1){
                    if(col+limit<=8){
                        mov = row+" / "+(col+limit);
                        if(other_pieces_area.indexOf(mov)!=-1){
                            in_path3.push(other_pieces[other_pieces_area.indexOf(mov)]);
                            mid_stop3 = 1;
                        }else if(mid_stop3!=1){
                            go_path3.push(mov);
                        };
                    }else{
                        stop3 = 1;
                    };
                };
                if(stop4!=1){
                    if(col-limit>=1){
                        mov = row+" / "+(col-limit);
                        if(other_pieces_area.indexOf(mov)!=-1){
                            in_path4.push(other_pieces[other_pieces_area.indexOf(mov)]);
                            mid_stop4 = 1;
                        }else if(mid_stop4!=1){
                            go_path4.push(mov);
                        };
                    }else{
                        stop4 = 1;
                    };
                };
                if(stop5!=1){
                    if(row+limit <= 8 && col+limit <= 8){
                        mov = (row+limit)+" / "+(col+limit);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        in_path5.push(other_pieces[other_pieces_area.indexOf(mov)]);
                        mid_stop5 = 1;
                    }else if(mid_stop5 != 1){
                        go_path5.push(mov);
                    };
                    }else{
                        stop5=1;
                    };
                };
                if(stop6!=1){
                    if(row+limit <= 8 && col-limit >= 1){
                        mov = (row+limit)+" / "+(col-limit);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        in_path6.push(other_pieces[other_pieces_area.indexOf(mov)]);
                        mid_stop6 = 1;
                    }else if(mid_stop6 != 1){
                        go_path6.push(mov);
                    };
                    }else{
                        stop6=1;
                    };
                };
                if(stop7!=1){
                    if(row-limit >= 1 && col-limit >= 1){
                        mov = (row-limit)+" / "+(col-limit);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        in_path7.push(other_pieces[other_pieces_area.indexOf(mov)]);
                        mid_stop7 = 1;
                    }else if(mid_stop7 != 1){
                        go_path7.push(mov);
                    };
                    }else{
                        stop7=1;
                    };
                };
                if(stop8!=1){
                    if(row-limit >= 1 && col+limit <= 8){
                        mov = (row-limit)+" / "+(col+limit);
                    if(other_pieces_area.indexOf(mov)!=-1){
                        in_path8.push(other_pieces[other_pieces_area.indexOf(mov)]);
                        mid_stop8 = 1;
                    }else if(mid_stop8 != 1){
                        go_path8.push(mov);
                    };
                    }else{
                        stop8=1;
                    };
                };
                limit++
            };
            let pinned = 0;
            if(in_path1.length>=2){
                if(eval(in_path1[1]).piece=="king" && eval(in_path1[0]).color != color && eval(in_path1[1]).color != color){
                    pinned = [go_path1 ,eval(in_path1[0])];
                };
            };
            if(in_path2.length>=2){
                if(eval(in_path2[1]).piece=="king" && eval(in_path2[0]).color != color && eval(in_path2[1]).color != color){
                    pinned = [go_path2, eval(in_path2[0])];
                };
            };
            if(in_path3.length>=2){
                if(eval(in_path3[1]).piece=="king" && eval(in_path3[0]).color != color && eval(in_path3[1]).color != color){
                    pinned = [go_path3 ,eval(in_path3[0])];
                };
            };
            if(in_path4.length>=2){
                if(eval(in_path4[1]).piece=="king" && eval(in_path4[0]).color != color && eval(in_path4[1]).color != color){
                    pinned = [go_path4, eval(in_path4[0])];
                };
            };

            if(in_path5.length>=2){
                if(eval(in_path5[1]).piece=="king" && eval(in_path5[0]).color != color && eval(in_path5[1]).color != color){
                    pinned = [go_path5 ,eval(in_path5[0])];
                };
            };
            if(in_path6.length>=2){
                if(eval(in_path6[1]).piece=="king" && eval(in_path6[0]).color != color && eval(in_path6[1]).color != color){
                    pinned = [go_path6, eval(in_path6[0])];
                };
            };
            if(in_path7.length>=2){
                if(eval(in_path7[1]).piece=="king" && eval(in_path7[0]).color != color && eval(in_path7[1]).color != color){
                    pinned = [go_path7 ,eval(in_path7[0])];
                };
            };
            if(in_path8.length>=2){
                if(eval(in_path8[1]).piece=="king" && eval(in_path8[0]).color != color && eval(in_path8[1]).color != color){
                    pinned = [go_path8, eval(in_path8[0])];
                };
            };
            if(pinned!==0){
                if(pinned[1].go!==0){
                for(let i = 0; i < pinned[1].go.length; i++){
                    if(pinned[0].indexOf(pinned[1].go[i])==-1){
                        pinned[1].go.splice(i,1);
                        i--;
                    };
                    if(pinned[1].go.length==0){
                        pinned[1].go = 0;
                    };
                }};
                if(pinned[1].kill!==0){
                for(let i = 0; i < pinned[1].kill.length; i++){
                    let spr = eval($(pinned[1].kill[i][1]).attr("id"));
                    if(spr!==obj){
                        pinned[1].kill.splice(i,1);
                        i--;
                    };
                    if(pinned[1].kill.length==0){
                        pinned[1].kill = 0;
                    };
                }};
            }; 
        };
    };

    /**
     * function checks if game ended, if yes then it checks if someone won or is it stealmate
     * @param {object} king - wp9 or bp9 - depends which side are we checking 
     */
    function end_game(king){
            let possible_moves_spr = [];
            Array.prototype.forEach.call($("#chess_mov a"), function(item){
                let who = eval($(item).attr("id"));
                if(who.active == "block" &&( who.go != 0 || who.kill != 0 )&& who.color == king.color){
                    possible_moves_spr.push(item);
                };
            });
            if(possible_moves_spr.length==0){
                let check = king.check;
                if(check == 1){
                    document.getElementById(king.color+"p9").style.backgroundImage="url(./settings/chess/endgame/"+king.color+"king_lost.png)";
                    if(king.color=="w"){
                        document.getElementById("bp9").style.backgroundImage="url(./settings/chess/endgame/bking_win.png)";
                    }else if(king.color=="b"){
                        document.getElementById("wp9").style.backgroundImage="url(./settings/chess/endgame/wking_win.png)";
                    };
                }else{
                    document.getElementById("bp9").style.backgroundImage="url(./settings/chess/endgame/bking_pat.png)";
                    document.getElementById("wp9").style.backgroundImage="url(./settings/chess/endgame/wking_pat.png)";
                };
                Array.prototype.forEach.call($("#chess_mov a"), function(item){
                    $(item).css("pointer-events", "none");
                });
    }};

    /**
     * function checks if game can be continued with current material, if no declares stalemate
     */
    function material(){
        let pat = 0;
        let wm = 0;
        let bm = 0;
        let w_available = [];
        let b_available = [];
        Array.prototype.forEach.call($("#chess_mov a"), function(item){
            let who = eval($(item).attr("id"));
            if(who.piece!="king" && who.active == "block"){
                if(who.color=="w"){
                    w_available.push(who.piece);
                }else if(who.color=="b"){
                    b_available.push(who.piece);
                };
            };
        }); 
        if(w_available.length == 0){
            wm = 1;
        }else if(w_available.length == 1 && (w_available[0]=="horse"||w_available[0]=="bishop")){
            wm = 1;
        };
        if(b_available.length == 0){
            bm = 1;
        }else if(b_available.length == 1 && (b_available[0]=="horse"||b_available[0]=="bishop")){
            bm = 1;
        };
        if(wm==1 && bm==1){
            pat = 1;
        };
        if(pat==1){
            document.getElementById("bp9").style.backgroundImage="url(./settings/chess/endgame/bking_pat.png)";
            document.getElementById("wp9").style.backgroundImage="url(./settings/chess/endgame/wking_pat.png)";
            Array.prototype.forEach.call($("#chess_mov a"), function(item){
                $(item).css("pointer-events", "none");
            }); 
        };
    };

    /**
     * function checks if there is possible a stalemate by repetition, if yes then it is declared
     */
    function stealmate_rep(){
        if(old_turn!=turn){
        old_turn = turn;
        let c_piece = $(current_piece).attr("id");
        let cc_piece = eval($(current_piece).attr("id")).coord;
        let castle = JSON.stringify([[wp9.active, wp9.castle, wp9.moved], [wp15.active, wp15.moved], [wp16.active, wp16.moved], [bp9.active, bp9.castle, bp9.moved], [bp15.active, bp15.moved], [bp16.active, bp16.moved]]);
        let ep = $(".ep").attr("id");
        last_mov.push([c_piece, cc_piece, castle, ep]);
        let test_moves = [];
        Array.prototype.forEach.call(last_mov, function(item){
            test_moves.push(item);
        });
        if(last_mov.length!=0 && move_count > 0){
            let count = 0;
            for(let i = 0; i < test_moves.length; i++){
                if(castle === test_moves[i][2] && ep === test_moves[i][3] && cc_piece == test_moves[i][1] && c_piece == test_moves[i][0]){
                        count++;
                        test_moves.splice(i, 1);
                        i--;
            };
            };
            if(count>=3){
                document.getElementById("bp9").style.backgroundImage="url(./settings/chess/endgame/bking_pat.png)";
                document.getElementById("wp9").style.backgroundImage="url(./settings/chess/endgame/wking_pat.png)";
                Array.prototype.forEach.call($("#chess_mov a"), function(item){
                    $(item).css("pointer-events", "none");
                }); 
            };
        }else if(move_count == 0){
            last_mov.splice(0, 1);
        };
    };
};
});