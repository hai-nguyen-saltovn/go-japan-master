<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = \Faker\Factory::create();
//    - Xây dựng（建築業）
//    - Công nghiệp chế tạo tàu biển（造船・船用工業）
//    - Sửa chữa ô tô（自動車整備業）
//    - Công việc liên quan nghiệp vụ trong sân bay（空港業）
//    - Nghiệp vụ khách sạn（宿泊業）
//    - Chăm sóc người già (Hộ lý.介護)
//    - Vệ sinh tòa nhà(ビルクリーニング)
//    - Nông nghiệp（農業）
//    - Ngư Nghiệp（漁業）
//    - Chế biến thực phẩm（飲食料品製造業）
//    - Dịch vụ ăn uống, nhà hàng（外食業）
//    - Gia công nguyên liệu （素材産業）
//    - Gia công cơ khí（産業機械製造業）
//    - Cơ điện, điện tử（電子・電気機器関連産業)
        $datas = [];
        $datas[] = ['name'=> 'Xây dựng', 'code'=>'XD'];
        $datas[] = ['name'=> 'Công nghiệp chế tạo tàu biển', 'code'=>'CNCT'];
        $datas[] = ['name'=> 'Nghiệp vụ khách sạn', 'code'=>'HTL'];
        $datas[] = ['name'=> 'Chăm sóc người già', 'code'=>'NSRH'];
        $datas[] = ['name'=> 'Vệ sinh tòa nhà', 'code'=>'BLDCLN'];
        $datas[] = ['name'=> 'Nông nghiệp', 'code'=>'NN'];
        $datas[] = ['name'=> 'Ngư nghiệp', 'code'=>'NGN'];
        $datas[] = ['name'=> 'Chế biến thực phẩm', 'code'=>'MKFD'];
        $datas[] = ['name'=> 'Dịch vụ ăn uống, nhà hàng', 'code'=>'REST'];
        $datas[] = ['name'=> 'Gia công nguyên liệu', 'code'=>'MKMTL'];
        $datas[] = ['name'=> 'Gia công cơ khí', 'code'=>'MKMACN'];
        $datas[] = ['name'=> 'Cơ điện, điện tử', 'code'=>'MKELEC'];
        foreach ($datas as $data) {
            \App\Model\Category::query()->create([
                'name' => $data['name'],
                'code' => $data['code'],
                'description' => $faker->text(200)
            ]);
        }

    }
}
