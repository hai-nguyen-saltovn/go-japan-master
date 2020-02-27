<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCadidatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cadidates', function (Blueprint $table) {
            $table->increments('id');
            $table->text('name')->nullable(false);
            $table->text('phone')->nullable(false);
            $table->text('address');
            $table->text('country')->nullable(false);
            $table->text('s3_cv_path')->nullable(false);
            $table->text('email')->nullable(false);
            $table->text('password');

            //Filled by Admin
            $table->integer('japanese_level')->comment('5,4,3,2,1');
            $table->integer('technical_certifies')->comment('1:Yes, 0:No');
            $table->text('category')->comment('job category');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cadidates');
    }
}
