import 'package:gift_of_the_nile/index.dart';

class AncientGodsModel extends CharactersModel<AncientGodModel> implements BaseModel<AncientGodsEntity> {
  const AncientGodsModel({super.characters, super.type});

  factory AncientGodsModel.fromJson(Map<String, dynamic> json) {
    return AncientGodsModel(
      characters: json['characters'] != null
          ? (json['characters'] as List)
              .map((i) => AncientGodModel.fromJson(i))
              .toList()
          : null,
      type: json['type'],
    );
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['type'] = type;
    if (characters != null) {
      data['characters'] = characters!.map((v) => v.toJson()).toList();
    }
    return data;
  }
  
  @override
  AncientGodsEntity toEntity() {
    return AncientGodsEntity(
      characters: characters!.map((e) => e.toEntity()).toList(),
      type: type,
    );
  }
}
