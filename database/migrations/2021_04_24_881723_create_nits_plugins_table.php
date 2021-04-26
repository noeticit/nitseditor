<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNitsPluginsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nits_plugins', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->string('name');
            $table->string('brief');
            $table->longText('description')->nullable();
            $table->longText('documentation')->nullable();
            $table->longText('featured_image')->nullable();
            $table->unsignedBigInteger('author_id');
            $table->unsignedBigInteger('version');
            $table->unsignedBigInteger('ratings');

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('author_id')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nits_plugins');
    }
}
