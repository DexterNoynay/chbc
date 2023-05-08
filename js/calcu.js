$(document).ready(function(){
	var width = $("#tile-width").val();
	var height = $("#tile-height").val();
	var unit = $("#unit").val();
	var room_width = $("#room-width").val();
	var room_height = $("#room-height").val();
	var room_unit = $("#room-unit").val();
	
	$("#tile-width").on("keyup",function(){
		width = $("#tile-width").val();
		area_calculator(width,height,unit,room_width,room_height,room_unit);
	})
	$("#tile-height").on("keyup",function(){
		height = $("#tile-height").val();
		area_calculator(width,height,unit,room_width,room_height,room_unit);
	})
	$("#unit").on("change",function(){
		unit = $("#unit").val();
		area_calculator(width,height,unit,room_width,room_height,room_unit);
		console.log("CHANGED");
	})
	//ROOM INPUTS
	$("#room-width").on("keyup",function(){
		room_width = $("#room-width").val();
		area_calculator(width,height,unit,room_width,room_height,room_unit);
	})
	$("#room-height").on("keyup",function(){
		room_height = $("#room-height").val();
		area_calculator(width,height,unit,room_width,room_height,room_unit);
	})
	$("#room-unit").on("change",function(){
		room_unit = $("#room-unit").val();
		area_calculator(width,height,unit,room_width,room_height,room_unit);
		console.log("CHANGED");
	})
	
})
function area_calculator(tile_width,tile_height,tile_unit,room_width,room_height,room_unit){
		var tile_area = tile_width*tile_height;
		var room_area = room_width*room_height;
		$("span.tile-area").text(tile_area+" "+tile_unit);
		$("span.room-area").text(room_area+" "+room_unit);
	
	if(room_unit == 'meter' && tile_unit == 'inch'){
		var convert_tile_area = (tile_area * 6.542)/10000;
		$("span.tiles_number").text((room_area/convert_tile_area));
	}
	else if (room_unit == 'meter'&& tile_unit == 'cm'){
		var convert_tile_area = (tile_area)/10000;
		$("span.tiles_number").text((room_area/convert_tile_area));
	}
    else if (room_unit == 'meter' && tile_unit == 'feet'){
        var convert_tile_area = (tile_area * 0.092903);
        $("span.tiles_number").text((room_area/convert_tile_area));
    }
	else if(room_unit == 'cm'&& tile_unit == 'inch'){
		var convert_tile_area = (tile_area*6.452);
		$("span.tiles_number").text((room_area/convert_tile_area));
	}
	else if(room_unit == 'cm'&& tile_unit == 'meter'){
		var convert_tile_area = (tile_area*10000)/6.452;
		$("span.tiles_number").text((room_area/convert_tile_area));
	}
    else if (room_unit == 'cm' && tile_unit == 'feet'){
        var convert_tile_area = (tile_area * 144 * 6.4516);
        $("span.tiles_number").text((room_area/convert_tile_area));
    }
	else if(room_unit == 'inch'&& tile_unit == 'cm'){
		var convert_tile_area = (tile_area/6.452);
		$("span.tiles_number").text((room_area/convert_tile_area));
	}
	else if(room_unit == 'inch'&& tile_unit == 'meter'){
		var convert_tile_area = (tile_area*10000)/6.452;
		$("span.tiles_number").text((room_area/convert_tile_area));
	}
    else if (room_unit == 'inch' && tile_unit == 'feet'){
        var convert_tile_area = (tile_area * 144);
        $("span.tiles_number").text((room_area/convert_tile_area));
    }
    else if (room_unit == 'feet' && tile_unit == 'meter'){
        var convert_tile_area = (tile_area * 10.764);
        $("span.tiles_number").text((room_area/convert_tile_area));
    }
    else if (room_unit == 'feet' && tile_unit == 'cm'){
        var convert_tile_area = (tile_area * 0.000010764);
        $("span.tiles_number").text((room_area/convert_tile_area));
    }
    else if (room_unit == 'feet' && tile_unit == 'inch'){
        var convert_tile_area = (tile_area / 144);
        $("span.tiles_number").text((room_area/convert_tile_area));
    }
	else{
		$("span.tiles_number").text((room_area/tile_area));
	}
}